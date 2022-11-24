import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useBreadcrumbPath } from '../../utils';
import { Crumb, MyBreadCrumbs } from './BreadCrumbs.style';

export const BreadCrumbs = () => {
  const breadcrumb = useBreadcrumbPath();
  // const [crumb, setCrumb] = useState(breadcrumb);
  // console.log(crumb);

  console.log(breadcrumb);

  useEffect(() => {
    const id = breadcrumb.at(-1);
    if (id == location.pathname.split('/').at(-1)) {
      axios
        .get(`http://188.225.83.42:8001/api/v1/advertisement/${id}`)
        .then((response) => {
          const replacement = response?.data?.slug;
          breadcrumb[breadcrumb.length - 1] = replacement;
          // setCrumb(replacement);
          // console.log(breadcrumb);
        })
        .catch((err) => console.log(err));
    }
  }, [breadcrumb]);

  return (
    <MyBreadCrumbs>
      <Image src={'/details/breadcrumbs.svg'} alt="/" width={24} height={24} />
      <p>Zmall</p>
      {breadcrumb?.map((route, index) => (
        <Crumb key={index}>
          <Image src={'/details/dot.svg'} alt="br" width={4} height={4} />
          <Link href="bbbb">{route}</Link>
        </Crumb>
      ))}
    </MyBreadCrumbs>
  );
};
