<script lang="ts">
  export let star;
  export let style;
  export let getFullFillColor;
  export let getStarPoints;
</script>

<svg
  class="star-svg"
  style="fill: url(#gradient{star.raw});height:{style.styleStarWidth}; width:{style.styleStarWidth}"
  ><polygon points={getStarPoints()} style="fill-rule:nonzero;" /><defs
    ><linearGradient id={'gradient' + star.raw}
      ><stop
        id="stop1"
        offset={star.percent}
        stop-opacity="1"
        stop-color={getFullFillColor(star)}
      />
      <stop id="stop2" offset={star.percent} stop-opacity="0" stop-color={getFullFillColor(star)} />
      <stop
        id="stop3"
        offset={star.percent}
        stop-opacity="1"
        stop-color={style.styleEmptyStarColor}
      /><stop
        id="stop4"
        offset="100%"
        stop-opacity="1"
        stop-color={style.styleEmptyStarColor}
      /></linearGradient
    ></defs
  ></svg
>
