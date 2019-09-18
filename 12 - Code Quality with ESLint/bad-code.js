const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

Promise.all([weather, tweets]).then((responses) => {
  const [weatherInfo, tweetInfo] = responses;
  console.log(weatherInfo, tweetInfo);
});

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch(
  'http://data.ratp.fr/api/datasets/1.0/search/?q=paris',
);

Promise.all([postsPromise, streetCarsPromise])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((responses) => {
    console.log(responses);
  });

/* eslint-disable */
if (!Array.prototype.copyWithin) {
  Object.defineProperty(Array.prototype, "copyWithin", {
    value: function(target, start /*, end*/) {
      // Steps 1-2.
      if (this == null) {
        throw new TypeError("this is null or not defined");
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-8.
      var relativeTarget = target >> 0;

      var to =
        relativeTarget < 0
          ? Math.max(len + relativeTarget, 0)
          : Math.min(relativeTarget, len);

      // Steps 9-11.
      var relativeStart = start >> 0;

      var from =
        relativeStart < 0
          ? Math.max(len + relativeStart, 0)
          : Math.min(relativeStart, len);

      // Steps 12-14.
      var end = arguments[2];
      var relativeEnd = end === undefined ? len : end >> 0;

      var final =
        relativeEnd < 0
          ? Math.max(len + relativeEnd, 0)
          : Math.min(relativeEnd, len);

      // Step 15.
      var count = Math.min(final - from, len - to);

      // Steps 16-17.
      var direction = 1;

      if (from < to && to < from + count) {
        direction = -1;
        from += count - 1;
        to += count - 1;
      }

      // Step 18.
      while (count > 0) {
        if (from in O) {
          O[to] = O[from];
        } else {
          delete O[to];
        }

        from += direction;
        to += direction;
        count--;
      }

      // Step 19.
      return O;
    },
    configurable: true,
    writable: true
  });
}
/* eslint-enable */
