// import css from './styles.module.scss';
// import { useMemo, useRef } from 'react';
// import Image from 'next/image';
// import { useClickOutside } from '@/hooks';
// import Link from 'next/link';

// export const SelectCategory = ({
//   categories,
//   onClose,
//   selectedCategory,
//   onSelectCategory,
// }: Props) => {
//   console.log(selectedCategory);
//   const ref = useRef<HTMLDivElement>(null);
//   useClickOutside(ref, () => onClose());

//   const advertsCount = useMemo(() => {
//     return categories.reduce((acc, category) => acc + category.advert_count, 0);
//   }, [categories]);

//   return (
//     <div className={css.selectCategories} ref={ref}>
//       <div className={css.text}>
//         <div className={css.titleBlock}>
//           <p className={css.title}>Выберите категорию</p>
//           <Link
//             href="/category/1"
//             className={css.descr}
//             onClick={() => onClose()}
//           >
//             смотреть все объявления <Image className={css.arrow} />
//           </Link>
//         </div>
//         <p className={css.number}>{advertsCount} объявления</p>
//       </div>
//       <div className={css.categories}>
//         {categories &&
//           categories.map((item, index) => (
//             <div
//               className={css.item}
//               key={index}
//               onClick={(e) => {
//                 onClose();
//                 onSelectCategory(item);
//               }}
//             >
//               <img src={item.icon} alt="icon" />
//               <p>{item.name}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };
