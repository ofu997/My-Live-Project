using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Podcast.Models;

namespace Podcast.Controllers
{
    public class LikesController : Controller
    {
        private PodcastDbContext db = new PodcastDbContext();

        // GET: Likes
        public ActionResult Index()
        {
            return View(db.Likes.ToList());
        }

        // GET: Likes/Details/5
        public ActionResult Details(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Likes likes = db.Likes.Find(id);
            if (likes == null)
            {
                return HttpNotFound();
            }
            return View(likes);
        }

        // GET: Likes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Likes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Guid id,[Bind(Include = "Id,LikeId,NumberOfLikes")] Likes likes)
        {
            if (ModelState.IsValid /*&& likes.NumberOfLikes==0*/)
            {
				//changed for 2 to test index page 
				likes.NumberOfLikes = 0;
                likes.LikeId = Guid.NewGuid();
				likes.Id = id;
                db.Likes.Add(likes);
                db.SaveChanges();
                return RedirectToAction("Index","Podcasts");
            }

            return View(likes);
        }

        // GET: Likes/Edit/5
		// changed from (Guid? id) to (Guid? LikeId)
        public ActionResult Edit(Guid? LikeId)
        {
            if (LikeId == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Likes likes = db.Likes.Find(LikeId);
            if (likes == null)
            {
                return HttpNotFound();
            }
            return View(likes);
        }

        // POST: Likes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,LikeId,NumberOfLikes")] Likes likes)
        {
            if (ModelState.IsValid)
            {
                db.Entry(likes).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(likes);
        }

        // GET: Likes/Delete/5
        public ActionResult Delete(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Likes likes = db.Likes.Find(id);
            if (likes == null)
            {
                return HttpNotFound();
            }
            return View(likes);
        }

        // POST: Likes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(Guid id)
        {
            Likes likes = db.Likes.Find(id);
            db.Likes.Remove(likes);
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
    }
}
