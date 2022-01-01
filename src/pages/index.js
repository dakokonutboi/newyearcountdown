import * as React from 'react';

// markup
export default function IndexPage() {
  const [dispTime, setDispTime] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const newYear = new Date(1640977200 * 1000);

      const difference = new Date(now - newYear);

      const diff = {
        hours: difference.getHours(),
        minutes: difference.getMinutes(),
        seconds: difference.getSeconds(),
      };

      if (diff.hours > 0) {
        setDispTime(`${diff.hours}:${diff.minutes}:${diff.seconds}`);
      } else if (diff.minutes > 0) {
        setDispTime(`${diff.minutes}:${diff.seconds}`);
      } else if (diff.seconds > 30) {
        setDispTime(`${diff.seconds}`);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <title>The Balls Drop</title>
      <h1>{dispTime}</h1>
    </main>
  );
}
