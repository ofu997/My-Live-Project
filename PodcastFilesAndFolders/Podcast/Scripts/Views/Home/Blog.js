$(document).ready(function () {
	$(".pagination li a").click(function () {
		var pageNumber = this.innerText;
		$(".blog-page").not(".blog-page-" + pageNumber).fadeOut("fast", function () {
			$(".blog-page-" + pageNumber).fadeIn("slow");
		});
	});
});