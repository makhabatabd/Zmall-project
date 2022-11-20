import css from './style.module.scss';
import classNames from 'classnames';
import { useRef } from 'react';
import { useClickOutside } from '@/hooks';

export const SelectCategories = ({
  categories,
  onClose,
  selectedCategory,
  onSelectCategory,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => onClose());

  return (
    <div className={css.selectCategories} ref={ref}>
      <div className={classNames('container', css.container)}>
        <div className={css.categories}>
          <div className={css.block}>
            <p className={css.title}>Выберите категорию:</p>
            {categories
              .filter((x) => x.id === selectedCategory)
              .map((item, index) => (
                <>
                  <p className={css.descr}>{item.name}</p>
                  <p>{item.advert_count} объявлений</p>
                </>
              ))}
          </div>
          <div className={css.text}>
            {categories.map((item, index) => (
              <div
                className={css.item}
                key={index}
                onClick={(e) => {
                  onClose();
                  onSelectCategory(item);
                }}
              >
                <img src={item.icon} alt="" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
