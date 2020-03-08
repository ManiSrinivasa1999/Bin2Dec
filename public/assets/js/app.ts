(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const binNumer = document.getElementById(
          'binnum') as HTMLInputElement;
      const decNumber = document.getElementById(
          'decnum') as HTMLInputElement;
      const convertButton = document.getElementById(
          'convert') as HTMLButtonElement;
      const MODEL = {
        len: binNumer.value.length,
        decNum: 0,
      };
      const VIEW = {
        render: () => {
        },
        init: () => {
          convertButton.onclick = () => {
            for (let i = 0; i < MODEL.len; i += 1) {
              if (binNumer[i] === '0' || binNumer[i] === '1') {
                CONTROLLER.bin2dec();
              } else {
                alert('Not a valid Binary Number');
              }
            }
          };
          VIEW.render();
        },
      };
      const CONTROLLER = {
        bin2dec: () => {
          const length = MODEL.len;
          for (let i = length - 1; i >= 0; i -= 1) {
            MODEL.decNum += Number(binNumer[i])*Math.pow(2, Number(length-1-i));
          }
          decNumber.innerHTML = `MODEL.decNum`;
        },
        init: () => {
          VIEW.init();
        },
      };
      CONTROLLER.init();
    }
  }
)();
