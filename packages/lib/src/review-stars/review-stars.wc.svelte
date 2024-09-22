<svelte:options
  customElement={{
    tag: 'jp-review-stars',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let value: number = 0;
  export let starsInput = true;
  export let indicator = true;
  export let style = {
    styleStarWidth: 15,
    styleEmptyStarColor: '#737373',
    styleFullStarColor: '#ffd219'
  };
  let emptyStar = 0;
  let fullStar = 1;
  let totalStars = 5;
  let oldStars = [];
  let stars: {
    raw: number;
    percent: string;
    index: number;
  }[] = [];

  let dispatch = createEventDispatcher();

  function getStarPoints() {
    let centerX = style.styleStarWidth / 2;
    let centerY = style.styleStarWidth / 2;
    let innerCircleArms = 5;
    let innerRadius = style.styleStarWidth / innerCircleArms;
    let innerOuterRadiusRatio = 2.5;
    let outerRadius = innerRadius * innerOuterRadiusRatio;
    return calcStarPoints(centerX, centerY, innerCircleArms, innerRadius, outerRadius);
  }

  function calcStarPoints(
    centerX: number,
    centerY: number,
    innerCircleArms: number,
    innerRadius: number,
    outerRadius: number
  ) {
    let angle = Math.PI / innerCircleArms;
    let angleOffsetToCenterStar = 60;
    let totalArms = innerCircleArms * 2;
    let points = '';
    for (let i = 0; i < totalArms; i++) {
      let isEvenIndex = i % 2 == 0;
      let r = isEvenIndex ? outerRadius : innerRadius;
      let currX = centerX + Math.cos(i * angle + angleOffsetToCenterStar) * r;
      let currY = centerY + Math.sin(i * angle + angleOffsetToCenterStar) * r;
      points += currX + ',' + currY + ' ';
    }
    return points;
  }

  function initStars() {
    for (let i = 0; i < totalStars; i++) {
      stars.push({
        raw: emptyStar,
        percent: emptyStar + '%',
        index: i + 1
      });
    }
  }

  function calcStarFullness(starData: { raw: number; percent: string; index: number }) {
    let starFullnessPercent = starData.raw * 100 + '%';
    return starFullnessPercent;
  }

  function setStars() {
    let fullStarsCounter = Math.floor(value);
    for (let i = 0; i < stars.length; i++) {
      if (fullStarsCounter !== 0) {
        stars[i].raw = fullStar;
        stars[i].percent = calcStarFullness(stars[i]);
        fullStarsCounter--;
      } else {
        let surplus = Math.round((value % 1) * 10) / 10;
        let roundedOneDecimalPoint = Math.round(surplus * 10) / 10;
        stars[i].raw = roundedOneDecimalPoint;
        return (stars[i].percent = calcStarFullness(stars[i]));
      }
    }
  }

  function setStarsHover(numberOfStarsHovered: number) {
    if (!starsInput) return;
    stars.forEach((star) => {
      star.raw = emptyStar;
      star.percent = calcStarFullness(star);
    });

    let fullStarsCounter = Math.min(Math.floor(numberOfStarsHovered), totalStars);
    for (let i = 0; i < fullStarsCounter; i++) {
      stars[i].raw = fullStar;
      stars[i].percent = calcStarFullness(stars[i]);
    }

    if (fullStarsCounter < numberOfStarsHovered) {
      let surplus = numberOfStarsHovered - fullStarsCounter;
      let roundedOneDecimalPoint = Math.round(surplus * 10) / 10;
      stars[fullStarsCounter].raw = roundedOneDecimalPoint;
      stars[fullStarsCounter].percent = calcStarFullness(stars[fullStarsCounter]);
    }
  }

  function resetStars() {
    if (!starsInput) return;
    stars = oldStars.map((star) => ({
      ...star,
      raw: emptyStar,
      percent: calcStarFullness(star)
    }));
    setStars();
  }

  function getFullFillColor(starData: any) {
    return starData.raw !== emptyStar ? style.styleFullStarColor : style.styleEmptyStarColor;
  }

  function handleMouseOver(index: number) {
    if (!starsInput) return;
    setStarsHover(index);
  }

  function handleClick(index: number) {
    if (!starsInput) return;
    dispatch('rating', index);
  }

  onMount(() => {
    initStars();
    setStars();
    oldStars = stars;
  });
</script>

<div class="star-container">
  <div class="star-rating">
    {#each stars as star}
      <button
        type="button"
        on:mouseover={() => handleMouseOver(star.index)}
        on:click={() => handleClick(star.index)}
        on:mouseout={() => resetStars()}
        on:focus={() => handleMouseOver(star.index)}
        on:blur={() => resetStars()}
        disabled={!starsInput}
        aria-label={`Star ${star.index}`}
      >
        <svg
          class="star-svg"
          style="fill: url(#gradient{star.raw});height:{style.styleStarWidth}; width:{style.styleStarWidth}"
        >
          <polygon points={getStarPoints()} style="fill-rule:nonzero;" />

          <defs>
            <linearGradient id={'gradient' + star.raw}>
              <stop
                id="stop1"
                offset={star.percent}
                stop-opacity="1"
                stop-color={getFullFillColor(star)}
              />
              <stop
                id="stop2"
                offset={star.percent}
                stop-opacity="0"
                stop-color={getFullFillColor(star)}
              />
              <stop
                id="stop3"
                offset={star.percent}
                stop-opacity="1"
                stop-color={style.styleEmptyStarColor}
              />
              <stop
                id="stop4"
                offset="100%"
                stop-opacity="1"
                stop-color={style.styleEmptyStarColor}
              />
            </linearGradient>
          </defs>
        </svg>
      </button>
    {/each}
    {#if indicator}
      <div class="indicator">{value}</div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .star-rating {
    display: flex;
    align-items: center;
  }

  .indicator {
    font-size: 1rem;
  }

  .star-container:not(:last-child) {
    margin-right: 5px;
    position: relative;
  }
</style>
