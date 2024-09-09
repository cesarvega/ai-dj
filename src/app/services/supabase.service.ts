import { Injectable } from '@angular/core';
import { supabaseConfig } from '@environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() { 
    this.supabase = createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseKey)
  }

  async SubscribeUser(body: any): Promise<any | null>{
    console.log(supabaseConfig.supabaseUrl)
    try {
      const {data, error} = await this.supabase
    .auth
    .signUp({
      email: body.email,
      password: body.password,
    })
    if (error) {
      console.error('Error al registrarse:', error.message);
    } else if (data.user) {
      const id = data.user.id
      const{data: dataProfile, error: errorProfile} = await this.supabase
        .from("profile")
        .insert({
          id: id,
          username: body.username,
          phone: body.phone
        })
      if (errorProfile ) {
        console.log(errorProfile)
        
      }else if(dataProfile){
        console.log(dataProfile)
      }
        
      



    }
    } catch (error) {
      console.log(error)
    }
    
  }
  async uploadImage(file: File): Promise<string | null> {
    // Genera un nombre único para la imagen
    const fileName = `${Date.now()}_${file.name}`;

    // Sube la imagen a Supabase Storage
    const { data, error } = await this.supabase.storage
      .from('kasaklaus')
      .upload(fileName, file);

    // Maneja errores de subida
    if (error) {
      console.error('Error uploading image:', error.message);
      return null;
    }
    const res = this.supabase.storage.from('GotControl').getPublicUrl(fileName).data.publicUrl;
    console.log(res)
    // Genera la URL pública de la imagen subida
    const { data: urlData, data: urlError } = this.supabase.storage
      .from('kasaklaus')
      .getPublicUrl(fileName)

    // Maneja errores de obtención de URL pública

    // Retorna la URL de la imagen subida
    return urlData?.publicUrl || null;
  }
  async sendProductData(productData: string): Promise<string | null> {
    try {
      const { data, error } = await this.supabase
        .from('products_test')
        .insert({
         product_json: productData}).select(); // Insertamos el JSON

      if (error) {
        console.error('Error inserting product:', error);
        return null
      }

    } catch (err) {
      console.error('Error sending product data:', err);
      return null
    }
    return null
  }




}
