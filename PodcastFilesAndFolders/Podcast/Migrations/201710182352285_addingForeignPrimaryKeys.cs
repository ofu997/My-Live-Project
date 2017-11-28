namespace Podcast.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingForeignPrimaryKeys : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Likes",
                c => new
                    {
                        LikeId = c.Guid(nullable: false),
                        Id = c.Guid(nullable: false),
                        NumberOfLikes = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.LikeId)
                .ForeignKey("dbo.Podcasts", t => t.Id, cascadeDelete: true)
                .Index(t => t.Id);
            
            CreateTable(
                "dbo.Podcasts",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Video = c.String(),
                        Text = c.String(),
                        Timestamp = c.DateTime(nullable: false),
                        Speaker = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Likes", "Id", "dbo.Podcasts");
            DropIndex("dbo.Likes", new[] { "Id" });
            DropTable("dbo.Podcasts");
            DropTable("dbo.Likes");
        }
    }
}
