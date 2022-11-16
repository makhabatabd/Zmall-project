import {CategoryList} from '@/components/Categories/CategoryList';
import Subcategory from '@/components/Categories/Subcategory/Subcategory';
import React from 'react';
import {useRouter} from "next/router";
import {ListItem} from "@/components/HorizontalCard/ListItem";

export default function Id() {
    const router = useRouter()
    console.log(router)
    return (
        <>
            <CategoryList/>
            <Subcategory/>
            <ListItem/>
        </>
    );
}


