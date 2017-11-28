using System;
using System.Collections.Generic;

using System.Linq;
using System.Web;
// these two are new
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Podcast.Models
{
	public class Likes
	{
		[Key]
		public Guid LikeId { get; set; }
		[ForeignKey("Podcast")]
		public Guid Id { get; set; }
		public int NumberOfLikes { get; set; }
		public virtual Podcast Podcast { get; set; }
	}
}