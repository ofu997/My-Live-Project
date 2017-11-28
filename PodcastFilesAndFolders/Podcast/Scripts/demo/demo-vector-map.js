// Custom jQuery
// ----------------------------------- 


(function(window, document, $, undefined){

  $(function(){
  
    var element = $('[data-vector-map]');
    
    new VectorMap(element, seriesData, markersData);
    
  });

  var seriesData = {
    'CA': 1200,   // Canada
    'DE': 2510,    // Germany
    'FR': 3710,    // France
    'AU': 5710,    // Australia
    'GB': 8310,    // Great Britain
    'RU': 9310,    // Russia
    'BR': 6610,    // Brazil
    'IN': 7810,    // India
    'CN': 4310,    // China
    'US': 20000,     // USA
    'SA': 410      // Saudi Arabia
  };
  
  var markersData = [
   
    { latLng: [45.512794, -122.679565], name: 'Portland, OR'},
    { latLng: [34.052235, -118.243683], name: 'Los Angeles, CA'},
    { latLng: [49.246292, -123.116226], name: 'Vancouver, BC'},
    { latLng: [41.162873, -73.861525], name: 'Ossining, NY'},
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.444124, -122.620915], name: 'Milwaukie, OR' },
    { latLng: [33.628385, -83.872326], name: 'Oxford, Georgia' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },
    { latLng: [45.412653, -122.634446], name: 'Oak Grove, OR' },

    
  ];


})(window, document, window.jQuery);
