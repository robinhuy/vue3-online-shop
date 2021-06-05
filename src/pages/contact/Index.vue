<template>
  <div>
    <!-- Title Page -->
    <section
      class="bg-title-page p-t-40 p-b-50 flex-col-c-m"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/heading-pages-06.jpg') + ')',
      }"
    >
      <h2 class="l-text2 t-center">Contact</h2>
    </section>

    <!-- content page -->
    <section class="bgwhite p-t-66 p-b-60">
      <div class="container">
        <div class="row">
          <div class="col-md-6 p-b-30">
            <div class="p-r-20 p-r-0-lg">
              <div class="contact-map size21" id="google_map"></div>
            </div>
          </div>

          <div class="col-md-6 p-b-30">
            <form class="leave-comment">
              <h4 class="m-text26 p-b-36 p-t-15">Send us your message</h4>

              <div class="bo4 of-hidden size15 m-b-20">
                <input
                  class="sizefull s-text7 p-l-22 p-r-22"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
              </div>

              <div class="bo4 of-hidden size15 m-b-20">
                <input
                  class="sizefull s-text7 p-l-22 p-r-22"
                  type="text"
                  name="phone-number"
                  placeholder="Phone Number"
                />
              </div>

              <div class="bo4 of-hidden size15 m-b-20">
                <input
                  class="sizefull s-text7 p-l-22 p-r-22"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                />
              </div>

              <textarea
                class="dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20"
                name="message"
                placeholder="Message"
              ></textarea>

              <div class="w-size25">
                <!-- Button -->
                <button
                  class="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  mounted() {
    let googleMapScript = document.createElement("script");
    googleMapScript.setAttribute(
      "src",
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAKFWBqlKAGCeS1rMVoaNlwyayu0e0YRes"
    );

    googleMapScript.onload = function () {
      const googleMap = window.google.maps;
      const mapSelector = document.getElementById("google_map");
      const imgPin = "images/icons/icon-position-map.png";
      const latitude = "40.614439",
        longitude = "-73.926781";
      const locations = [
        [
          '<div class="infobox"><p>Now that you visited our website, how' +
            " <br>about checking out our office too?</p></div>",
          latitude,
          longitude,
          2,
        ],
      ];

      let map;

      if (mapSelector !== undefined) {
        map = new googleMap.Map(mapSelector, {
          zoom: 15,
          scrollwheel: 0,
          navigationControl: true,
          mapTypeControl: false,
          scaleControl: false,
          draggable: 1,
          styles: [],
          center: new googleMap.LatLng(latitude, longitude),
          mapTypeId: googleMap.MapTypeId.ROADMAP,
        });
      }

      let infowindow = new googleMap.InfoWindow();

      let marker, i;

      for (i = 0; i < locations.length; i++) {
        marker = new googleMap.Marker({
          position: new googleMap.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon: imgPin,
        });

        googleMap.event.addListener(
          marker,
          "click",
          (function (marker, i) {
            return function () {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            };
          })(marker, i)
        );
      }
    };

    document.head.appendChild(googleMapScript);
  },
};
</script>