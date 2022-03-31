<template>
  <div class="video">
    <section>
        <input type="text" placeholder="find scratch pad">
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat laudantium cum corporis suscipit nesciunt numquam, assumenda consequatur sed earum minus, explicabo hic accusamus facilis nam culpa. Sit, iste nobis! Voluptatum eveniet consequuntur nulla perspiciatis maiores deserunt nihil inventore animi, odio architecto natus voluptate unde, facere molestias voluptatibus molestiae doloribus laboriosam possimus rerum, sapiente veritatis repellat vitae? Officiis pariatur molestias temporibus laborum optio asperiores vel repellat ad reiciendis. Beatae itaque praesentium ullam tempore asperiores debitis rem officia, atque iure sapiente voluptatum quia adipisci laboriosam laborum? Praesentium autem aperiam sint reprehenderit, deserunt necessitatibus sunt sequi quisquam, deleniti laudantium voluptatem cumque dolore similique pariatur tempore doloremque culpa totam rem unde ad aliquid id. Accusamus recusandae laudantium dignissimos voluptatem minima animi officia consectetur laboriosam quidem. Aperiam, voluptatem dolore. Hic mollitia eaque perferendis reprehenderit dolorum modi, corrupti veniam laborum voluptates explicabo eligendi ad, dolores id nesciunt illum omnis ratione temporibus nisi error sapiente accusantium cupiditate vitae qui. Repudiandae sit repellat dolorem quisquam alias accusamus. Vitae, reiciendis expedita! Maiores optio, neque suscipit adipisci nihil minus, excepturi eius, aspernatur reiciendis tempore sed porro repellat repudiandae. Accusamus consectetur laborum dolorum doloremque? Quam sed magnam quasi consequatur eius dolores assumenda, adipisci laboriosam blanditiis inventore exercitationem, at quia culpa. Aut?
        </p>
    </section>
    <video autoplay muted loop id="myVideo">
    <source src="/video.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
    </video>      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
.video {
    position: relative;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 90%;
}

section {
    /* font-size: 9em; */
    width: 100%;
    position: absolute;
    z-index: 3;
    color: white;
}
</style>