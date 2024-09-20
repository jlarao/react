import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useProductMutation } from "../hooks/useProductMutation";

interface FormInputs {
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
}
export const NewProduct = () => {
  const productMutation = useProductMutation();

  const { control ,  handleSubmit, watch } = useForm<FormInputs>({
    defaultValues: {
      title:       "Teclado",
      price:       150,
      description: 'EL-993384'+
      ''+
      'Teclado con 8 teclas multimedia. Cuenta con sistema de membrana para un tecleo silencioso y conector USB 2.0.'+
      ''+
      ''+
      'ESPECIFICACIONES TÉCNICAS'+
      ''+
      '• Conector: USB'+
      '• Longitud de cable: 1.40 m'+
      '• Mecanismo de teclas: Membrana'+
      '• Alimentación: 5 Vcc 70 mA'+
      '• Compatibilidad: Windows® XP /Vista / 7 & Mac OS®',
      category:    "men's clothing",
      image:       "https://easyline.me/cdn/shop/products/EL-993384_01C.png?v=1656340663&width=1445",
    }
  });

  const newImage = watch('image');
  
  const onSubmit:SubmitHandler<FormInputs> = (data) => {
    productMutation.mutate(data);
    
  };

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">

        <div className="flex justify-around items-center">
          
          <div className="flex-col w-[500px]">
            <Controller 
              control={control}
              name="title"
              rules={{ required: true }}
              render= { ({field}) =>(
                <Input value={field.value} onChange={field.onChange} className="mt-2" type="text" label="Titulo del producto" />
              )}
            />

            <Controller 
              control={control}
              name="price"
              rules={{ required: true }}
              render= { ({field}) =>(
                <Input value={field.value?.toString()} onChange={ev => field.onChange( +ev.target.value)} className="mt-2" type="number" label="Precio del producto" />
            )}
            />

            <Controller 
              control={control}
              name="image"
              rules={{ required: true }}
              render= { ({field}) =>(
                <Input value={field.value} onChange={field.onChange} className="mt-2" type="url" label="Url del producto" /> 
              )}
            />

            <Controller 
              control={control}
              name="description"
              rules={{ required: true }}
              render= { ({field}) =>(
                <Textarea value={field.value} onChange={field.onChange} className="mt-2" label="Descripcion del producto" />
              )}
            />

            <Controller 
              control={control}
              name="category"
              rules={{ required: true }}
              render= { ({field}) =>(
                <select value={field.value} onChange={field.onChange} className="rounded-md p-3 mt-2 bg-gray-800 w-full">
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
              )}
            />
            

            <br />
            <Button 
              type="submit"
              isDisabled={productMutation.isPending}
              className="mt-2" color="primary">
                {productMutation.isPending }
                Crear</Button>
          </div>

          <div className="bg-white rounded-2xl p-10 flex items-center" style={{
            width: '500px',
            height: '600px',
          }}>

            <Image
              src={newImage }
            />
          </div>
          
        </div>


      </form>

    </div>
  )
}