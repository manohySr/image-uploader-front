const upload = async (file) => {
  console.log(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
  let formdata = new FormData();
  formdata.append('file', file);
  formdata.append(
    'upload_preset',
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );
  formdata.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
  formdata.append('folder', 'Cloudinary-React');
  const requestOptions = {
    method: 'POST',
    body: formdata,
    // redirect: 'follow',
  };
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      requestOptions
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default upload;
