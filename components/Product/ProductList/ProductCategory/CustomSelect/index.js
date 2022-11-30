import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './styles'

const CustomSelect = ({ categoryList, query, setQuery, totalProduct }) => {
  const router = useRouter()

  useEffect(() => {
    const productWrapper = document.querySelector('.product-wrapper')
    const selectResultsOption = document.querySelector('.select-results-options')
    const selectDropdown = document.querySelector('.select-dropdown')
    const navbarContainer = document.querySelector('.navbar-container')
    const productWrapperHeight = productWrapper.offsetHeight
    const navbarContainerHeight = navbarContainer.offsetHeight
    const handleScroll = () => {
      const bottomPos = selectResultsOption.getBoundingClientRect().bottom
      const topPos = selectResultsOption.getBoundingClientRect().top
      if (selectDropdown.classList.contains('move-top')) {
        if (topPos < navbarContainerHeight) {
          selectDropdown.classList.remove('move-top')
        }
      } else {
        if (bottomPos > productWrapperHeight) {
          selectDropdown.classList.add('move-top')
        }
      }
    }
    productWrapper.addEventListener('scroll', handleScroll)
    return () => {
      productWrapper.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleChangeCate = (name) => {
    if (name) {
      router.replace({
        pathname: '/products',
        query: {
          ...query,
          page: 1,
          limit: 12,
          categoryName: name,
        },
      })
      setQuery({ ...query, page: 1, limit: 12, categoryName: name })
    } else {
      router.replace({
        pathname: '/products',
        query: {
          ...query,
          page: 1,
          limit: 12,
          categoryName: '',
        },
      })
      setQuery({ ...query, page: 1, limit: 12, categoryName: name })
    }
  }

  return (
    <span className="select-dropdown select-dropdown-below">
      <span className="select-results">
        <ul className="select-results-options">
          <li className="select-results-option" onClick={() => handleChangeCate(null)}>
            {`All categories (${totalProduct})`}
          </li>
          {categoryList.map((cate) => {
            if (!cate.quantity) return <li key={cate._id}></li>
            return (
              <li className="select-results-option" key={cate._id} onClick={() => handleChangeCate(cate.name)}>
                {`${cate.name} (${cate.quantity})`}
              </li>
            )
          })}
        </ul>
      </span>
      <style jsx>{styles}</style>
    </span>
  )
}

export default CustomSelect
