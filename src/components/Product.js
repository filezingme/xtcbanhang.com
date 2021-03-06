import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import PT from "prop-types";
import {
  LightgalleryProvider,
  LightgalleryItem
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css"; //https://codesandbox.io/examples/package/react-lightgallery > https://codesandbox.io/s/mo45kpo92j
import parser from 'react-html-parser';
import Paginate from './Paginate';
// import $ from 'jquery';
// import { Helmet } from 'react-helmet';


const PhotoItem = ({ image, thumb, title, group }) => (
    <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={thumb} style={{ width: "100%" }} loading="lazy" alt={title} title={title} />
    </LightgalleryItem>
);

PhotoItem.propTypes = {
    image: PT.string.isRequired,
    thumb: PT.string,
    group: PT.string.isRequired
};


function Product({ data, showContactForm, handleProductReadMore, callbackActivedMenuItem }) {
    
	const [dataObj, setDataObj] = useState(null)

    const {categoryName, page=1} = useParams()

    const charNumLimitedInDesc = 100


    useEffect(() => {
        if(!dataObj) {

            const obj = {}

            //paginateConfig
            if(data.paginateConfig){
                obj.itemsPerPage = data.paginateConfig.itemsPerPage
                obj.maxPageDisplay = data.paginateConfig.maxPageDisplay
            }
            
            //product list
            let list = data.products
            if(categoryName) {
                list = list.filter(product => product.category.toLowerCase() === categoryName.toLowerCase())

                //auto callback CategoryName
                ;(() => callbackActivedMenuItem(categoryName))()
            }

            //productList with paging
            const listPaging = list.slice((parseInt(page) - 1) * obj.itemsPerPage, parseInt(page) * obj.itemsPerPage)
            obj.productList = listPaging

            //total pages
            obj.totalPages = Math.ceil(list.length/obj.itemsPerPage)

            //site info
            obj.siteInfo = data.siteInfo

            setDataObj(obj)
        }
	}, [categoryName, page])
    

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }    

    function getPrice(price, percentagePriceIncrease, percentagePriceIncreaseAppliesToAllProducts) {

        //t??nh gi?? & ph???n tr??m t??ng n???u t???n t???i c???t % tr??n s???n ph???m
        //c???t % [percentagePriceIncrease] ch???p nh???n c??? s??? ??m v?? s??? 0
        if (percentagePriceIncrease !== null && percentagePriceIncrease !== undefined)
        {            
            const priceResult = price + (percentagePriceIncrease/100*price)
            return currencyFormat(priceResult)
        }

        //t??nh gi?? & ph???n tr??m t??ng n???u t???n t???i c???t % tr??n to??n c???c 
        //c???t % [percentagePriceIncreaseAppliesToAllProducts] ch???p nh???n c??? s??? ??m v?? s??? 0
        else if (percentagePriceIncreaseAppliesToAllProducts !== null && percentagePriceIncreaseAppliesToAllProducts !== undefined)
        {
            const priceResult = price + (percentagePriceIncreaseAppliesToAllProducts/100*price)
            return currencyFormat(priceResult)
        }

        //tr??? v??? ch??? gi?? s???n ph???m n???u kh??ng t???n t???i c???t % tr??n s???n ph???m v?? c???t % tr??n to??n c???c
        else
        {
            return currencyFormat(price)
        }
    }

    const validShowReadMore = (input, limit) => 
    {
        if(input !== null && input !== undefined && input.length > limit)
            return true  
        return false;
    }

    const showReadMore = (product, limit, dots, percentagePriceIncreaseAppliesToAllProducts) => 
    {
        //format the Desc
        let description = updateDescByOtherPriceInPercentage(product, percentagePriceIncreaseAppliesToAllProducts)
        
        if(validShowReadMore(description, limit))
        {
            description = description.substring(0,limit)
            var lastIndexOfSpace = description.lastIndexOf(" ")
            description = description.substr(0, lastIndexOfSpace) + dots
        }    
        return parser(description);
    }

    const updateDescByOtherPriceInPercentage = (product, percentagePriceIncreaseAppliesToAllProducts) => 
    {
        let description = product.description
        if(description !== null && description !== undefined) 
        {
                let prices = description.match(/\d+(?:\.\d+)?/g)
                if(prices)
                {
                    prices.forEach(function(price) 
                    {
                        //get price
                        if(price > 10000){                        
                            let percentagePriceIncrease = getPrice(Number(price), product.priceInfo.percentagePriceIncrease, percentagePriceIncreaseAppliesToAllProducts)
                            description = description.replace(price, percentagePriceIncrease)

                            //add more property 'DescByOtherPriceInPercentage' to object
                            product.DescByOtherPriceInPercentage = description
                        }
                    });
                }
        }

        return description
    }


    return (dataObj && (<>
        {/* product list */}
        {dataObj.productList.map((product) => (
            <section key={product.id}>
                <header>
                    <h1 className='home-product-title' onClick={(e) => handleProductReadMore(e, product)}>{product.title}</h1>
                </header>
                <div className="content">
                    <section>
                        <header>
                            <h2>
                                Gi??: <span className="price">{getPrice(product.priceInfo.price, product.priceInfo.percentagePriceIncrease, dataObj.siteInfo.percentagePriceIncreaseAppliesToAllProducts)}</span>
                                <input type="hidden" id="price" value={currencyFormat(product.priceInfo.price)} />
                                <input type="hidden" id="percentagePriceIncrease" value={product.priceInfo.percentagePriceIncrease} />
                                <input type="hidden" id="percentagePriceIncreaseAppliesToAllProducts" value={dataObj.siteInfo.percentagePriceIncreaseAppliesToAllProducts} />
                            </h2>
                            <h3>
                                <i>M??: <strong>{product.id}</strong></i><br/>
                                <i>Nh??m: <a href={process.env.PUBLIC_URL + `/category/${product.category.toLowerCase()}/`}>{product.category}</a></i><br/><br/>
                            </h3>
                            
                            {product.description && (<div>
                                <i className="fas fa-quote-left fa-2x fa-pull-left"></i>
                                <p className='excerpt' onClick={(e) => handleProductReadMore(e, product)}>
                                    {showReadMore(product, charNumLimitedInDesc, ' ...', dataObj.siteInfo.percentagePriceIncreaseAppliesToAllProducts)}                                    
                                    {validShowReadMore(product.description, charNumLimitedInDesc) && (
                                        <i className='read-more'>Xem th??m</i>
                                    )}                                    
                                </p>
                            </div>
                            )}

                            <h2 className='h2buy'><a href="/#" className="buy" onClick={(e) => showContactForm(e, product, data.contactFormConfig)}>{dataObj.siteInfo.buyBtnText}</a></h2>
                        </header>
                        <div className="content">
                            <div className={`gallery`}>
                                <LightgalleryProvider>
                                    {product.images.map((image, index) => (
                                        <PhotoItem key={index} 
                                            image={process.env.PUBLIC_URL + `/assets/images/product/${image}`}
                                            thumb={process.env.PUBLIC_URL + `/assets/images/product/thumbnail/${image}`} 
                                            title={product.title}
                                            group={product.id.toString()} 
                                        />									
                                    ))}		                                    
                                </LightgalleryProvider>								
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        ))}

        {/* paginate */}
        <Paginate page={parseInt(page)} pages={dataObj.totalPages} maxPageDisplay={dataObj.maxPageDisplay} category={categoryName} />
    </>))
}

export default Product