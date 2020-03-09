(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const binNumber = document.getElementById(
          'binnum') as HTMLInputElement;
      const decNumber = document.getElementById(
          'decnum') as HTMLInputElement;
      const convertButton = document.getElementById(
          'convert') as HTMLButtonElement;
      // eslint-disable-next-line no-unused-vars
      const MODEL = {
        // no data to change or upadte the data
      };
      const VIEW = {
        render: () => {
        },
        init: () => {
          convertButton.onclick = () => {
            const length = binNumber.value.length;
            for (let i = 0; i < length; i += 1) {
              if (!(binNumber.value[i] === '0' || binNumber.value[i] === '1')) {
                decNumber.value = `Not A Valid Binary Number`;
              } else {
                const decNum = CONTROLLER.bin2dec(binNumber.value);
                decNumber.value = `${decNum}`;
              }
            }
          };
          VIEW.render();
        },
      };
      const CONTROLLER = {
        bin2dec: (num) => {
          let finalDecNum = 0;
          const length = binNumber.value.length;
          for (let i = length-1; i >= 0; i -=1) {
            finalDecNum += Number(binNumber.value[i]) * Math.pow(2, length-1-i);
          }
          return finalDecNum;
        },
        init: () => {
          VIEW.init();
        },
      };
      CONTROLLER.init();
    }
  }
)();
