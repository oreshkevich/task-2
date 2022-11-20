import React, { useState, useEffect } from 'react';

function Home() {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    fetch(`https://82.202.204.94/tmp/test.php`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setCalendar(data.project);
        // console.log(calendar);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div data-testid="main-page">fsfsf</div>
    </>
  );
}

export { Home };
