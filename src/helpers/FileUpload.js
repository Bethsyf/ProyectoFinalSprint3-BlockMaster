export const FileUpload = async (file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dmaviub4l/upload'

    const  formData = new FormData();
    // donde la voy a conectar o enviar
    formData.append("upload_preset", "blockmaster");
    //lo que quiero enviar o subir
    formData.append("file", file);

    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })
       const cloudResp = await resp.json();
       console.log(cloudResp);
       return cloudResp.secure_url;

}