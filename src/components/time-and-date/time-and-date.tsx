import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { getFormattedDate, getFormattedTime } from '../../utils/helpers.js';

const TimeAndDate = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime('2-digit', '2-digit', false));

  // with this one, there's ~25sec delay
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTime(getFormattedTime());
  //   }, 60000); // Update every minute (60,000 milliseconds)

  //   // Cleanup the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []); // The empty dependency array ensures that the effect runs only once on mount

  // this is exact. need to read about it more! 
  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(getFormattedTime('2-digit', '2-digit', false));
      const now = new Date();
      const remainingTimeUntilNextMinute = 60000 - now.getSeconds() * 1000 - now.getMilliseconds();
      setTimeout(updateCurrentTime, remainingTimeUntilNextMinute);
    };

    // Initial update
    updateCurrentTime();

    // Schedule subsequent updates
    const intervalId = setInterval(updateCurrentTime, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  // const date = new Date().toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
  const date = getFormattedDate('long', 'short', 'numeric');

  return (
    <Container fluid>
      {`${date} ${currentTime}`}
    </Container>
  )
};

export default TimeAndDate;
