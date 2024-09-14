export const fileUpload = async( file ) => {

    if(!file) throw new Error('No tenemos ningún archivo');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dm3o26um0/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        console.log({ resp });
        if(! resp.ok) throw new Error('No se pudo subir la imagen');
        
        const cloudResp = await resp.json();
        return cloudResp.secure_url;
    } catch (error) {
        
    }

}