export const isImage = (file: File): boolean => {
  // eslint-disable-next-line no-unneeded-ternary
  return /image\/\w+/.test(file.type) ? true : false;
};

export const isTxt = (file: File): boolean => {
  // eslint-disable-next-line no-unneeded-ternary
  return /text\/plain\/\w+/.test(file.type) ? true : false;
};


export const isSizeValid = (file: File, maxSize: number): boolean => {
  // eslint-disable-next-line no-unneeded-ternary
  return file.size > maxSize ? false : true;
};

/**
 * 
 * @param file
 * @returns
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve) => {
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (evt) {
      const imgBase64Data = evt.target?.result as string;

      resolve(imgBase64Data);
    };
  });
};
