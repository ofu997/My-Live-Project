using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Podcast.Models;
using PagedList;
/*
// for paging
using PagedList.Mvc;
using PagedList;
//using System.DateTime;
using PagedList;
*/

namespace Podcast.Controllers
{
    public class PodcastsController : Controller
    {
		// stuff I wrote
		[HttpPost]
		public ActionResult AddLikeAjax(Guid id, [Bind(Include = "Id,LikeId,NumberOfLikes")] Likes likes)
		{
			if (ModelState.IsValid /*&& likes.NumberOfLikes==0*/)
			{
				//changed for 2 to test index page 
				likes.NumberOfLikes = 0;
				likes.LikeId = Guid.NewGuid();
				likes.Id = id;
				db.Likes.Add(likes);
				db.SaveChanges();
				//var updatedLikes = AddLike(likes);

				return View(likes);
			}
			return null;
		}



		// end stuff I wrote 

        private PodcastDbContext db = new PodcastDbContext();

        // GET: Podcasts
        // public ActionResult Index( int? page, string sortOrder)
		
		// Replace ActionResult with ViewResult, add 3 other parameters 
		public ViewResult Index(string sortOrder, string currentFilter, string searchString, int? page)
		{
			ViewBag.CurrentSort = sortOrder;
			ViewBag.NameSortParm = String.IsNullOrEmpty(sortOrder) ? "speaker_desc" : "";
			ViewBag.DateSortParm = sortOrder == "Timestamp" ? "timestamp_desc" : "Timestamp";

			if (searchString != null)
			{
				page = 1;
			}
			else
			{
				searchString = currentFilter;
			}

			ViewBag.CurrentFilter = searchString;

			var podcasts = from p in db.Podcasts
						   select p;

			if (!String.IsNullOrEmpty(searchString))
			{
				podcasts = podcasts.Where(p => p.Speaker.Contains(searchString));
			}

			switch (sortOrder)
			{
				case "speaker_desc":
					podcasts = podcasts.OrderByDescending(p => p.Speaker);
					break;
				case "Timestamp":
					podcasts = podcasts.OrderBy(p => p.Timestamp);
					break;
				case "timestamp_desc":
					podcasts = podcasts.OrderByDescending(p => p.Timestamp);
					break;
				default:
					podcasts = podcasts.OrderBy(p => p.Speaker);
					break;
			}

			int pageSize = 3;
			int pageNumber = (page ?? 1);
			// return View(db.Podcasts.ToList().ToPagedList(page ?? 1, 4));
			return View(podcasts.ToPagedList(pageNumber, pageSize));
		}

		// GET: Podcasts/Details/5
		public ActionResult Details(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Podcast.Models.Podcast podcast = db.Podcasts.Find(id);
            if (podcast == null)
            {
                return HttpNotFound();
            }

			// paging needed? 

            return View(podcast);
        }

        // GET: Podcasts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Podcasts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Video,Text,Timestamp,Speaker")] Podcast.Models.Podcast podcast)
        {
            if (ModelState.IsValid)
            {

				podcast.Timestamp = DateTime.Now;
                podcast.Id = Guid.NewGuid();
                db.Podcasts.Add(podcast);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(podcast);
        }

        // GET: Podcasts/Edit/5
        public ActionResult Edit(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
			Podcast.Models.Podcast podcast = db.Podcasts.Find(id);
            if (podcast == null)
            {
                return HttpNotFound();
            }
            return View(podcast);
        }

        // POST: Podcasts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Video,Text,Timestamp,Speaker")] Podcast.Models.Podcast podcast)
        {
            if (ModelState.IsValid)
            {
                db.Entry(podcast).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(podcast);
        }

        // GET: Podcasts/Delete/5
        public ActionResult Delete(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
			Podcast.Models.Podcast podcast = db.Podcasts.Find(id);
            if (podcast == null)
            {
                return HttpNotFound();
            }
            return View(podcast);
        }

        // POST: Podcasts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(Guid id)
        {
			Podcast.Models.Podcast podcast = db.Podcasts.Find(id);
            db.Podcasts.Remove(podcast);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

		// try to add likes 
		public ActionResult AddLikes(Guid? id)
		{
			if (id == null)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}

			Podcast.Models.Likes likes = db.Likes.Find(id);
			
			Podcast.Models.Podcast podcast = db.Podcasts.Find(id);
			if (podcast == null)
			{
				return HttpNotFound();
			}
			return View(likes);
		}
    }
}
