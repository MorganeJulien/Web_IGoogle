var date=false;
var meteo = false;
var photo = false ;
var youtube = false ;
var twitter =false ;

function deleteWidget(widget){
    switch (widget){
        case meteo :
            var element = document.getElementById("meteo");
            element.parentNode.removeChild(element);
            meteo= false;
            break ;
        case date:
            var element = document.getElementById("date");
            element.parentNode.removeChild(element); 
            date=false;
            break;
        case photo:
            var element = document.getElementById("photo");
            element.parentNode.removeChild(element); 
            photo=false;
            break;  
        case youtube:
            var element = document.getElementById("youtube");
            element.parentNode.removeChild(element); 
            youtube=false;
            break;  
        case twitter:
            var element = document.getElementById("twitter");
            element.parentNode.removeChild(element); 
            twitter=false;
            break;  
    }
}
function WidgetDate() {
    if (date==false){
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'Decembre');
        j = date.getDate();
        jour = date.getDay();
        jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
            h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
            m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
            s = "0"+s;
        }
        resultat = jours[jour]+' '+j+' '+mois[moi]+' '+annee+' : '+h+':'+m+':'+s;
        var final = document.getElementById("widgets");
        var div = document.createElement("div");
        div.setAttribute("class","col s12 m4");
        div.setAttribute("id","date");
        $(final).append(div);
        $(div).append("<h4 class='center'> Date & Heure </h4>");
        var p = document.createElement("p");
        p.setAttribute("class","center");
        p.setAttribute("id","Date");
        $(div).append(p);
        $(p).append(resultat);
        date=true;
        var div4 = document.createElement("div");
        div4.setAttribute("class", "button center");
        $(div).append(div4);
           
        $(div4).append("<a  class='btn waves-effect waves-light pink darken-3' onclick='deleteWidget(date)'><i class='material-icons left right'>delete</i></a>");
        
    }
}
setInterval(function(){
   if(date){
     date = new Date;
     annee = date.getFullYear();
     moi = date.getMonth();
     mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'Decembre');
     j = date.getDate();
     jour = date.getDay();
     jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
     h = date.getHours();
     if(h<10)
     {
         h = "0"+h;
     }
     m = date.getMinutes();
     if(m<10)
     {
         m = "0"+m;
     }
     s = date.getSeconds();
     if(s<10)
     {
         s = "0"+s;
     }
     resultat = jours[jour]+' '+j+' '+mois[moi]+' '+annee+' : '+h+':'+m+':'+s;
     var div = document.getElementById('Date');

    $(div).html(resultat);
   }
}, 1000);
function WidgetMeteo(){
    if (meteo==false){
        var container = document.getElementById("widgets");
        var div = document.createElement("div");
        div.setAttribute("class","col s12 m4");
        div.setAttribute("id","meteo");
        $(container).append(div);
        $(div).append("<h4 class='center'> Météo </h4>");
        var div1 = document.createElement("div");
        div1.setAttribute("class","row");
        $(div).append(div1);
        var form = document.createElement("form");
        form.setAttribute("class","col s12");
        $(div1).append(form);
        var div2 = document.createElement("div");
        div2.setAttribute("class","input-field col s12");
        $(form).append(div2);
        $(div2).append("<i class='material-icons prefix'>search</i>");
        $(div2).append("<input type='text' id ='ville_meteo' class='validate'>");
        $(div2).append("<label for='icon_prefix'>Rechercher ...</label>");
        var div3 = document.createElement("div");
        div3.setAttribute("class", "center");

        $(form).append(div3);
        $(div3).append("<input type='button' value='Rechercher' class='btn waves-effect waves-light pink darken-3' onclick='resultatMeteo()'>");

        var div4 = document.createElement("div");
        div4.setAttribute("class", "button center");
        $(div).append(div4);
           
        $(div4).append("<a class='btn waves-effect waves-light pink darken-3' onclick='deleteWidget(meteo)'><i class='material-icons left right'>delete</i></a>");
        meteo = true ;
    }
}
function resultatMeteo(){

        var ville = document.getElementById("ville_meteo").value;
        if (ville != ""){
            url="http://api.openweathermap.org/data/2.5/weather?q="+ville+"&APPID=3c0cb59c33d96399adc5a12644479b78";
        }
        else{
            url="http://api.openweathermap.org/data/2.5/weather?q=Bordeaux&APPID=3c0cb59c33d96399adc5a12644479b78";
            ville= "Bordeaux";
        }
        $.getJSON(url,function(donnees)
        {
        icone = donnees.weather[0].icon;
        temperature = donnees.main.temp;
        temperature= parseFloat(temperature);
        parseInt(temperature);
        temperature =parseInt(temperature-273.15);
        temperature = temperature.toString();
        $("#meteo").empty();
        $("#meteo").append("<h4 class= center> Meteo à " +ville+"</h4>" );
        $("#meteo").append('<p class= "center"> Temps : <img src="http://openweathermap.org/img/w/'+ icone + '.png" /> </p> ');
        $("#meteo").append('<p class="center"> Température : ' + temperature + '°C<br>');
        $("#meteo").append("<div class='button center'><a class=\"btn waves-effect waves-light pink darken-3\" onclick='deleteWidget(meteo)'><i class=\"material-icons left right\">delete</i></a></div>");
        });

}
function WidgetPhoto(){
  if (photo == false){
    var container = document.getElementById("widgets");
    var div = document.createElement("div");
    div.setAttribute("class","col s12 m4");
    div.setAttribute("id","photo");
    $(container).append(div);
    $(div).append("<h4 class='center'> Photo </h4>");
    var div1 = document.createElement("div");
    div1.setAttribute("class","row");
    $(div).append(div1);
    var form = document.createElement("form");
    form.setAttribute("class","col s12");
    $(div1).append(form);
    var div2 = document.createElement("div");
    div2.setAttribute("class","input-field col s12");
    $(form).append(div2);
    $(div2).append("<i class='material-icons prefix'>search</i>");
    $(div2).append("<input type='text' id ='mot_photo' class='validate'>");
    $(div2).append("<label for='icon_prefix'>Rechercher ...</label>");
    var div3 = document.createElement("div");
    div3.setAttribute("class", "center");

    $(form).append(div3);
    $(div3).append("<input type='button' value='Rechercher' class='btn waves-effect waves-light pink darken-3' onclick='resultatPhoto()'>");

    var div4 = document.createElement("div");
    div4.setAttribute("class", "button center");
    $(div).append(div4);
    $(div4).append("<a class='btn waves-effect waves-light pink darken-3' onclick='deleteWidget(photo)'><i class='material-icons left right'>delete</i></a>");
    photo = true ;
  }
}
  function resultatPhoto(){
    photo = document.getElementById('photo');
    mot = document.getElementById("mot_photo").value;
    privateKey = "913e56c24251a8a98146f569381c1775";
    per_page = "10";
    format = "json";
    url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+ privateKey +
        "&tags="+mot+"&per_page="+ per_page +"&format="+format+"&nojsoncallback=1";
    $.getJSON(url,function(json){
        $.each(json.photos.photo,function(i,myresult){
            apiurl_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + privateKey + "&photo_id="+myresult.id+"&format=json&nojsoncallback=1";
            $.getJSON(apiurl_size,function(size){
                $.each(size.sizes.size,function(i,myresult_size){
                    selected_size = 240;
                    if(myresult_size.width==selected_size ){
                            $(photo).empty();
                            $(photo).append('<h4 class="center"> Photo de '+mot+'</h4>');
                            $(photo).append('<img  class = "center" src="'+myresult_size.source+'" width="300"/>');
                            $(photo).append("<div class='button center'><a class=\"btn waves-effect waves-light pink darken-3\" onclick='deleteWidget(photo)'><i class=\"material-icons left right\">delete</i></a></div>");
                    }
                })
            })
        });
    });
}
function WidgetYoutube(){
  if (youtube == false){
    var container = document.getElementById("widgets");
    var div = document.createElement("div");
    div.setAttribute("class","col s12 m4");
    div.setAttribute("id","youtube");
    $(container).append(div);
    $(div).append("<h4 class='center'> Youtube </h4>");
    var div1 = document.createElement("div");
    div1.setAttribute("class","row");
    $(div).append(div1);
    var form = document.createElement("form");
    form.setAttribute("class","col s12");
    $(div1).append(form);
    var div2 = document.createElement("div");
    div2.setAttribute("class","input-field col s12");
    $(form).append(div2);
    $(div2).append("<i class='material-icons prefix'>search</i>");
    $(div2).append("<input type='text' id ='rechercheYoutube' class='validate'>");
    $(div2).append("<label for='icon_prefix'>Rechercher ...</label>");
    var div3 = document.createElement("div");
    div3.setAttribute("class", "center");

    $(form).append(div3);
    $(div3).append("<input type='button' value='Rechercher' class='btn waves-effect waves-light pink darken-3' onclick='resultatYoutube()'>");

    var div4 = document.createElement("div");
    div4.setAttribute("class", "button center");
    $(div).append(div4);
    $(div4).append("<a class='btn waves-effect waves-light pink darken-3' onclick='deleteWidget(youtube)'><i class='material-icons left right'>delete</i></a>");
    youtube = true ;
  }
}
function resultatYoutube(){
    video = document.getElementById('youtube');
    nomvid = document.getElementById('rechercheYoutube').value;
    $(video).empty();
    $(video).append('<h4 class="center"> Video Youtube de ' + nomvid + '</h4>');
    instruction = '<iframe id="ytplayer" type="text/html" width="300" height="230" src="http://www.youtube.com/embed?listType=search&list='+ nomvid +'" frameborder="0" />';
    $(video).append(instruction);
    $(video).append("<div class='button center'><a class=\"btn waves-effect waves-light pink darken-3\" onclick='deleteWidget(youtube)'><i class=\"material-icons left right\">delete</i></a></div>");
}
function Maps(){
    var map;
    var initialize;
    var direction;

    var container = document.getElementById("widgets");

    var div = document.createElement("div");
    div.setAttribute("class","col s12 m4");
    div.setAttribute("id","maps");
    var div_map = document.createElement("div");
    div_map.setAttribute("id", "map_canvas");

    $(container).append(div);
    $(div).append("<h4 class='center'> Google Maps </h4>");
    $(div).append(div_map);

    var latLng = new google.maps.LatLng(44.7905109, -0.6114086); // Correspond au coordonnées de l'iut
    var myOptions = {
        zoom      : 14, // Zoom par défaut
        center    : latLng, // Coordonnées de départ de la carte de type latLng
        mapTypeId : google.maps.MapTypeId.TERRAIN, // Type de carte, différentes valeurs possible HYBRID, ROADMAP, SATELLITE, TERRAIN
        maxZoom   : 20
    };

    map = new google.maps.Map(document.getElementById('div_map'), myOptions);;
}

function twit(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);js.id = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    }
}

function WidgetTwitter(){
  if (twitter == false){
    var container = document.getElementById("widgets");
    var div = document.createElement("div");
    div.setAttribute("class","col s12 m4");
    div.setAttribute("id","twitter");
    $(container).append(div);
    $(div).append("<h4 class='center'> Twitter </h4>");
    var div2 = document.createElement("div");
    div2.setAttribute("class","center");
    $(div).append(div2);
    $(div2).append("<a class='twitter-timeline' href='https://twitter.com/MichelBillaud' data-widget-id='711911068151455746'></a>");
    twit(document, "script", "twitter-wjs");

    var div4 = document.createElement("div");
    div4.setAttribute("class", "button center");
    $(div).append(div4);
    $(div4).append("<a class='btn waves-effect waves-light pink darken-3' onclick='deleteWidget(twitter)'><i class='material-icons left right'>delete</i></a>");
    twitter = true ;
  }
}
function widgetSport(){
    url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1';

    $.getJSON(url,function(donnees) { });
}
