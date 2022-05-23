const heading = document.querySelector("h1");
heading.innerHTML = 10;
const interval=setInterval(() => {
    heading.innerHTML = 10;
    setInterval(() => {
      heading.innerHTML = 9;
      setInterval(() => {
        heading.innerHTML = 8;
        setInterval(() => {
          heading.innerHTML = 7;
          setInterval(() => {
            heading.innerHTML = 6;
            setInterval(() => {
              heading.innerHTML = 5;
              setInterval(() => {
                heading.innerHTML = 4;
                setInterval(() => {
                  heading.innerHTML = 3;
                  setInterval(() => {
                    heading.innerHTML = 2;
                    setInterval(() => {
                      heading.innerHTML = 1;
                      setInterval(() => {
                          heading.innerHTML = "Happy Independence Day";
                        }, 2000);
                    }, 2000);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
clearInterval(setInterval)
