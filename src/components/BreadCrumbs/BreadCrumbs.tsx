import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useBreadcrumbPath } from '../../utils';
import { Crumb, MyBreadCrumbs } from './BreadCrumbs.style';

export const BreadCrumbs = () => {
  const breadcrumb = useBreadcrumbPath();
  const [crumb, setCrumb] = useState<string[] | []>();

  function titleRussianCase(item: string) {
    if (item === 'Privacy') return 'Политика конфиденциальности';
    if (item === 'Add-Advert') return 'Добавление товара';
    if (item === 'Detail') return 'Детали';
    if (item === 'Categories') return 'Категории';
    if (item === 'Help-Page') return 'Помощь';
    return item;
  }

  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    const id = breadcrumb.at(-1);

    if (path.includes('detail')) {
      if (id == location.pathname.split('/').at(-1)) {
        axios
          .get(`http://188.225.83.42:8001/api/v1/advertisement/${id}`)
          .then((response) => {
            const replacement = response?.data?.slug;
            breadcrumb[breadcrumb.length - 1] = replacement;
            setCrumb(breadcrumb);
          })
          .catch((err) => console.log(err));
      } else {
        setCrumb(breadcrumb);
      }
    } else if (path.includes('help')) {
      if (id == location.pathname.split('/').at(-1)) {
        axios
          .get(`http://188.225.83.42:8001/api/v1/site/help/${id}`)
          .then((response) => {
            const replacement = response?.data?.title;
            breadcrumb[breadcrumb.length - 1] = replacement;
            setCrumb(breadcrumb);
          })
          .catch((err) => console.log(err));
      } else {
        setCrumb(breadcrumb);
      }
    } else if (path.includes('categories')) {
      if (id == location.pathname.split('/').at(-1)) {
        axios
          .get(`http://188.225.83.42:8001/api/v1/advertisement/category/${id}`)
          .then((response) => {
            const replacement = response?.data?.name;
            breadcrumb[breadcrumb.length - 1] = replacement;
            setCrumb(breadcrumb);
          })
          .catch((err) => console.log(err));
      }
    } else {
      setCrumb(breadcrumb);
    }
  }, [router.query.id, path]);

  return (
    <MyBreadCrumbs>
      <Image src={'/details/breadcrumbs.svg'} alt="/" width={24} height={24} />
      <p>Zmall</p>
      {crumb?.map((route: string, index: number) => (
        <Crumb key={index}>
          <Image src={'/details/dot.svg'} alt="br" width={4} height={4} />
          <Link href={'/'}>{titleRussianCase(route)}</Link>
        </Crumb>
      ))}
    </MyBreadCrumbs>
  );
};
