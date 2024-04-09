"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/common/components/ui/card";
import Image from "next/image";
import { Button } from "@/common/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { getData } from "@/common/lib/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Food } from "@prisma/client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { toast } from "sonner";
import { convertCurrency } from "@/common/lib/convertCurrency";
import { IoIosHeart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useSession } from "next-auth/react";
import axios from "axios";
type Props = {};

const PopularDishes = React.memo((props: Props) => {
  const dispatch = useDispatch();
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [favoriteFoodIds, setFavoriteFoodIds] = useState<Set<string>>(
    new Set()
  );
  const { data: session } = useSession();
  const user = session?.user?.id;
  const queryClient = useQueryClient();
  const getDataLimited = async (menu: any) => {
    const response = await getData(menu);
    return response.slice(0, 6);
  };

  const { data: foods, isLoading } = useQuery<Food[]>({
    queryKey: ["food"],
    queryFn: () => getDataLimited("menu"),
  });

  const { data: favorite } = useQuery<Food[]>({
    queryKey: ["favorite"],
    queryFn: () => getData(`favorite/${user}`),
  });

  useEffect(() => {
    if (favorite) {
      const ids = new Set(favorite.map((food) => food.id));
      setFavoriteFoodIds(ids);
    }
  }, [favorite]);

  const handleAddToCart = (food: Food) => {
    dispatch(addToCart(food));
    toast.success("Added to cart");
  };

  const AddFavorites = useMutation({
    mutationFn: (formData: { userId: string; foodId: string }) => {
      return axios.post("/api/favorite", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    },
  });

  const RemoveFavorites = useMutation({
    mutationFn: (formData: { userId: string; foodId: string }) => {
      return axios.delete(`/api/favorite/${user}`, {
        data: formData,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    },
  });

  const handleAddToFavorite = (food: any) => {
    const formData = {
      userId: session?.user?.id,
      foodId: food,
    };
    AddFavorites.mutate(formData);
    AddFavorites.isSuccess && toast.success("Added to favorite");
    AddFavorites.isError && toast.error("Food already favorited by user");
  };

  const handleRemoveFromFavorite = (food: any) => {
    const formData = {
      userId: session?.user?.id,
      foodId: food,
    };
    RemoveFavorites.mutate(formData);
    RemoveFavorites.isSuccess && toast.success("Removed from favorite");
  };

  return (
    <article className="mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-zinc-800 text-2xl font-bold font-['Poppins']">
          Popular Dishes
        </h2>
        <p className="text-sm text-primary font-['Poppins']">View All</p>
      </div>
      <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-2 group">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          foods?.map((food, i) => (
            <Card
              key={i}
              className="relative w-52 border-none py-2"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="flex justify-center relative">
                <Image
                  src={food.image ?? ""}
                  alt={food.name}
                  width={249}
                  height={249}
                />
                {hoveredIndex === i && (
                  <div>
                    {favoriteFoodIds.has(food.id) ? (
                      <Button
                        variant={"icon"}
                        className="absolute top-1 right-0 bg-transparent"
                        onClick={() => handleRemoveFromFavorite(food.id)}
                      >
                        <IoIosHeart size={24} />
                      </Button>
                    ) : (
                      <Button
                        variant={"icon"}
                        className="absolute top-1 right-0 bg-transparent"
                        onClick={() => handleAddToFavorite(food.id)}
                      >
                        <FaRegHeart size={24} />
                      </Button>
                    )}
                    {/* <Button
                      variant={"icon"}
                      className="absolute top-1 right-0 bg-transparent"
                      onClick={() => handleAddToFavorite(food.id)}
                    >
                      <FaRegHeart size={24} />
                    </Button> */}
                  </div>
                )}
              </CardContent>
              <CardFooter className="text-base font-normal font-['Poppins'] px-4 flex flex-col items-start">
                <p>{food.name}</p>
                <div className="flex justify-between items-center gap-x-4 w-full">
                  <span className="text-zinc-800 text-xl font-bold font-['Poppins']">
                    {convertCurrency(food.price)}
                  </span>
                  <Button
                    size="sm"
                    className="bg-primary text-white mt-2"
                    onClick={() => handleAddToCart(food)}
                  >
                    <AiOutlinePlus size={20} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </article>
  );
});

export default PopularDishes;
