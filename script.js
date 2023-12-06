let list = 'uuee cyvm egll lfpg uacc zbaa eham ulaa engm eidw panc ellx loww lshz ebbr eddf cyyz eddb eddk uaaa eprz lipz efhk bikf visr', inp = $('input'), ol = $('#fill'), sn = '';

$('button').click(function() {
   inp.blur();
   let id = list.toUpperCase().split(' ');
   if(inp.val())
      get(inp.val().trim());
    else
      for(let i = 0; i < id.length; i++)
         setTimeout(get(id[i], i), 3000);
  // if(!sn)
      //ol.text('No airport found');
})
function get(id, i = 0) {
      let url = `https://cors-anywhere.herokuapp.com/https://aviationweather.gov/api/data/metar?ids=${id}&format=json`;
      fetch(url)
      .then(res => {
         if(!res.ok)
            if(i == 0)
               alert('AWC error: '+res.status+' - '+res.type);
            else
               console.log(res.status+' - '+res.type);
         return res.json();
      })
      .then(data => {
         let dt = data[0];
         if(sn = dt.wxString.includes('SN')) {
            if(i == 0)
               ol.empty();
            ol.append(`<li>${dt.name}  -->  ${dt.wxString}</li>`);
         }
         // console.log((i+1)+' - '+dt.name+' '+dt.wxString);
      });
}

$('input').keypress(function(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    $('button').click();
  }
});

// $('input').on('input', function() {
//    $console.log($(this).val().length);
// })
