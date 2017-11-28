using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Podcast.Models
{
	public class Podcast
	{
		[Key]
		public Guid Id { get; set; }
		public string Video { get; set; }
		public string Text { get; set; }
		public DateTime Timestamp { get; set; }
		public string Speaker { get; set; }
		// added to follow a tutorial
		//public int Likes { get; set; }
		public virtual IList<Likes> NumberOfLikes { get; set; }
	}

	// The database : in a class
    public class PodcastDbContext: DbContext
    {
		// tables 
        public DbSet<Podcast> Podcasts { get; set; }

		public DbSet<Likes> Likes { get; set; }
    }


}