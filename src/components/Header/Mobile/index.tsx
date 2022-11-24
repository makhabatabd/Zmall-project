import React from 'react';

export const Mobile = () => {
  <div>Header</div>;
};
// // import {Link, NavLink, useNavigate} from "react-router-dom";
// import React, { useRef, useState } from 'react';

// // import {advertModel} from "@/entities/advert";

// // import user from "@/assets/icons/avatar.svg";
// import { SelectCategories } from './Categories/SelectCategories';

// import cn from 'classnames';
// import css from './styles.module.scss';

// import { useAppSelector } from '@/hooks';
// import Image from 'next/image';
// // import {useAppSelector} from "@/store";

// export const Mobile = () => {
//   // const favoritesQty = useAppSelector(state => state.favoritesInfo);

//   const [isActive, setIsActive] = useState<boolean>(false);
//   const [city, setCity] = useState<number>();
//   const [isActiveCategories, setIsActiveCategories] = useState<boolean>(false);
//   const [category, setCategory] = useState<number>();
//   const [value, setValue] = useState<string>('');
//   const [isShow, setIsShow] = useState<boolean>(false);
//   const { data: advertsData, isLoading } =
//     advertModel.advertApi.useGetAdvertsQuery(
//       {
//         categoryId: category,
//         cityId: city,
//         search: value,
//       },
//       { skip: !value }
//     );

//   const navigate = useNavigate();
//   const { data: cities } = commonEntitiesApi.useGetCitiesQuery();

//   useEffect(() => {
//     value && setIsShow(true);
//   }, [value]);

//   const handlerSubmit = () => {
//     // navigate("/search", {state: {arr: advertsData}});
//     setIsShow(false);
//   };

//   const ref = useRef<HTMLDivElement>(null);
//   // useClickOutside(ref, () => {
//   // setIsShow(false);
//   // });

//   return (
//     <div className={css.mobile}>
//       <div className={css.three}></div>
//       <div className={css.twoBlock}>
//         <div className={cn('container', css.container)}>
//           <div className={css.form}>
//             <input
//               type="text"
//               placeholder="Поиск объявлений..."
//               onChange={(e) => setValue(e.target.value)}
//               value={value}
//               onClick={() => setIsShow(true)}
//             />
//             <button type="button" onClick={handlerSubmit}>
//               <Image
//                 src="/header/search.svg"
//                 alt="searchIcon"
//                 width={30}
//                 height={30}
//                 className={css.seacrhIcon}
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//       {isActive && (
//         <SelectLocation
//           citys={false || []}
//           selectCity={city}
//           onSelectCity={(city) => setCity(city.id)}
//           onClose={() => setIsActive(false)}
//         />
//       )}

//       {isActiveCategories && (
//         <SelectCategories
//           categories={false || []}
//           selectedCategory={category}
//           onSelectCategory={(category) => setCategory(category.id)}
//           onClose={() => setIsActiveCategories(false)}
//         />
//       )}
//     </div>
//   );
// };
