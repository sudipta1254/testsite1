let list = 'uuee cyvm egll lfpg zbaa eham engm eidw panc ellx loww lshz ebbr eddf cyyz uacc eddb eddk uaaa eprz lipz efhk bikf visr ulaa enbs usss efks bgjn cylt uhma ueee',
inp = $('input[type="search"]'), ol = $('#fill'), spinner = $('#spin img'), sn = false;

$('button').click(function() {
   spinner.toggle();
   inp.blur();
   let cmp = getComp();
   let id = list.split(' ');
   if(inp.val())
      get(getUrl(cmp, id = inp.val().trim()), cmp, id, 0);
   else
      for(let i = 0; i < id.length; i++)
         get(getUrl(cmp, id[i]), cmp, id[i], i);
   if(!sn) {
      ol.text('No airport found!');
      setTimeout(() => {
         spinner.toggle();
      }, 1000);
   }
})
function get(url, cmp, id, i) {
      fetch(url)
      .then(res => {
         if(!res.ok)
            if(i == 0)
               alert(cmp+' error: '+res.status+' - '+res.type);
            else
               console.log(res.status+' - '+res.type);
         return res.json();
      })
      .then(data => {
         let alt = false;
         if(!i)
            ol.empty();
         if(cmp === 'AWC') {
            let dt = data[0];
            if(alt = dt.wxString.includes('SN'))
               set(id, dt.name, dt.wxString);
         } else if(cmp === 'CWX') {
            let dt = data.data[0];
            if(alt = dt.conditions[0].code.includes('SN'))
               set(id, dt.station.name+', '+dt.station.location, dt.conditions[0].text);
         } else {
            let dt = data;
            if(alt = dt.wx_code[0].repr.includes('SN'))
               set(id, dt.station, dt.wx_code[0].repr);
         }
         if(alt)
            sn = alt;
     
         
         // console.log((i+1)+' - '+dt.name+' '+dt.wxString);
      });
}

function set(id, name, code) {
   ol.append(`<li>${id.toUpperCase()} - ${name}  -->  ${code}</li>`);
}
function getComp() {
   if($('#awc').is(':checked')) 
      return 'AWC';
   else if($('#cwx').is(':checked'))
      return 'CWX';
   else
      return 'AVWX';
}
function getUrl(cmp, id) {
      if(cmp === 'AWC')
         return `https://proxy.cors.sh/https://aviationweather.gov/api/data/metar?ids=${id}&format=json`;
      else if(cmp === 'CWX')
         return `https://api.checkwx.com/metar/${id}/decoded?x-api-key=f6993fa9bf31403c914cad7130`;
      else
         return `https://avwx.rest/api/metar/${id}?token=2r_H32HZ2AzCZDotC-1GetnWkIZhkBMpdq2W3rLRabI`;
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

// f6993fa9bf31403c914cad7130

