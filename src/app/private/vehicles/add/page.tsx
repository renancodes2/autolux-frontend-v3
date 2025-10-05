"use client";

import { Input } from "@/app/private/vehicles/_components/input/input";
import { getCookieClient } from "@/lib/cookieClient";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CarFormInputs, carSchema } from "./vehicle_schema/vehicle_schema";


interface CategoryData {
  id: string;
  name: string;
}

interface BrandData {
  id: string;
  name: string;
}

export default function AddVehicles() {
  const [categories, setCategories] = useState<CategoryData[] | []>([]);
  const [brands, setBrands] = useState<BrandData[] | []>([]);
  const [filteredCategories, setFilteredCategories] = useState<CategoryData[] | []>([]);
  const [filteredBrands, setFilteredBrands] = useState<BrandData[] | []>([]);
  const [categorySearch, setCategorySearch] = useState("");
  const [brandSearch, setBrandSearch] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await api.get("/categories");
        console.log("Hellooooooooooooooooo")
        setCategories(response.data);
        setFilteredCategories(response.data);
      } catch (err) {
        console.error("Erro ao buscar categorias", err);
      }
    }

    async function getBrands() {
      try {
        const response = await api.get("/brands");
        setBrands(response.data);
        setFilteredBrands(response.data);
      } catch (err) {
        console.error("Erro ao buscar marcas", err);
      }
    }

    getCategories();
    getBrands();
  }, []);

  const handleCategorySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCategorySearch(value);

    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const handleBrandSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setBrandSearch(value);

    const filtered = brands.filter((brand) =>
      brand.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBrands(filtered);
  };

  const handleCategorySelect = (category: CategoryData) => {
    setCategorySearch(category.name);
    setSelectedCategoryId(category.id);
    setFilteredCategories([]);
  };

  const handleBrandSelect = (brand: BrandData) => {
    setBrandSearch(brand.name);
    setSelectedBrandId(brand.id);
    setFilteredBrands([]);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages((prevImages) => [...prevImages, ...newImages]);

      const newImagePreviews = newImages.map((file) => URL.createObjectURL(file));
      setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm<CarFormInputs>({
    resolver: zodResolver(carSchema),
  });

  console.log(errors)
  const onSubmit: SubmitHandler<CarFormInputs> = async (data) => {
    console.log("Dados do formulário:", data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("model", data.model);
    formData.append("price", data.price);
    formData.append("year", data.year);
    formData.append("km", data.km);
    formData.append("color", data.color);
    formData.append("transmission", data.transmission);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("licensePlate", data.licensePlate);
    formData.append("engine", data.engine);
    formData.append("categoryId", selectedCategoryId || "");
    formData.append("brandId", selectedBrandId || "");

    images.forEach(image => {
      formData.append("images", image);
    });

    const token = await getCookieClient();

    try {
      const response = await api.post("/vehicles", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      console.log("Carro adicionado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao adicionar veículo:", error);
    }
  };

  return (
    <main>
      <h2 className="text-center mt-10 mb-4 font-bold text-2xl">Adicione seu veiculo</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-2">
          <div className="w-full h-60 border-1 border-l-gray-800 relative">
            <div className="absolute flex items-center justify-center flex-col w-full h-full">
              <input
                type="file"
                id="image"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="w-full h-full p-2 absolute z-40"
              />
            </div>
            <div className="mt-2 flex gap-2">
            {imagePreviews.length > 0 && imagePreviews.map((image, index) => (
              <div key={index} className="mt-2 w-full relative">
                <Image 
                  src={image} 
                  alt={`Imagem do Veículo ${index}`} 
                  fill={true}
                  className="object-cover object-center h-60 w-full"
                />
              </div>
            ))}
            </div>
          </div>

          <div>
            <label htmlFor="name">Nome: </label>
            <Input
              name="name"
              type="text"
              id="name"
              placeholder="Adicione o nome do veiculo"
              register={register}
              error={errors?.name}
            />
          </div>

          <div className="flex items-center w-full gap-2">
            <div className="w-full">
              <label htmlFor="model">Modelo: </label>
              <Input
                name="model"
                type="text"
                id="model"
                placeholder="Adicione o modelo do veiculo"
                register={register}
                error={errors?.model}
              />
            </div>

            <div className="w-full">
              <label htmlFor="price">Preço: </label>
              <Input
                name="price"
                type="number"
                id="price"
                placeholder="Adicione o preço do veiculo"
                register={register}
                error={errors?.price}
              />
            </div>
          </div>

          <div className="flex items-center w-full gap-2">
            <div className="w-full">
              <label htmlFor="km">Km: </label>
              <Input
                name="km"
                type="number"
                id="km"
                placeholder="Qual é a kilometragem do veiculo?"
                register={register}
                error={errors?.km}
              />
            </div>

            <div className="w-full">
              <label htmlFor="year">Ano: </label>
              <Input
                name="year"
                type="number"
                id="year"
                placeholder="2025/2025"
                register={register}
                error={errors?.year}
              />
            </div>
          </div>

          <div className="flex items-center w-full gap-2">
            <div className="w-full">
              <label htmlFor="city">Cidade: </label>
              <Input
                name="city"
                type="text"
                id="city"
                placeholder="Adicione a cidade do veiculo"
                register={register}
                error={errors?.city}
              />
            </div>

            <div className="w-full">
              <label htmlFor="state">Estado: </label>
              <Input
                name="state"
                type="text"
                id="state"
                placeholder="Adicione o estado do veiculo"
                register={register}
                error={errors?.state}
              />
            </div>

            <div className="w-full">
              <label htmlFor="country">Pais: </label>
              <Input
                name="country"
                type="text"
                id="country"
                placeholder="Adicione o Pais do veiculo"
                register={register}
                error={errors?.country}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <label htmlFor="category">Categoria: </label>
              <input
                type="text"
                id="category"
                placeholder="Pesquisar por categoria"
                value={categorySearch}
                onChange={handleCategorySearch}
                className="w-full outline-0 p-2 border-1 border-slate-400 rounded"
              />
              <div className="mt-2">
                {filteredCategories && filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => handleCategorySelect(category)}
                    className="cursor-pointer absolute bg-slate-400 w-full py-2 px-2"
                  >
                    {category.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full relative">
              <label htmlFor="brand">Marca: </label>
              <input
                type="text"
                id="brand"
                placeholder="Pesquisar por marca"
                value={brandSearch}
                onChange={handleBrandSearch}
                className="w-full outline-0 p-2 border-1 border-slate-400 rounded"
              />
              <div className="mt-2">
                {filteredBrands && filteredBrands.map((brand) => (
                  <div
                    key={brand.id}
                    onClick={() => handleBrandSelect(brand)}
                    className="cursor-pointer absolute"
                  >
                    {brand.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center w-full gap-2">
            <div className="w-full">
              <label htmlFor="color">Cor: </label>
              <Input
                name="color"
                type="text"
                id="color"
                placeholder="Adicione a cor do veiculo"
                register={register}
                error={errors?.color}
              />
            </div>

            <div className="w-full">
              <label htmlFor="engine">Motor: </label>
              <Input
                name="engine"
                type="text"
                id="engine"
                placeholder="Adicione o motor do veiculo"
                register={register}
                error={errors?.engine}
              />
            </div>

            <div className="w-full">
              <label htmlFor="transmission">Transmissão: </label>
              <select
                id="transmission"
                {...register("transmission")}
                className="w-full outline-0 p-2 border-1 border-slate-400 rounded"
              >
                <option value="automatic">Automático</option>
                <option value="manual">Manual</option>
              </select>
            </div>
          </div>

          <div className="mt-4 mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
            >
              Publicar Veículo
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
