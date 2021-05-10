import React, {useState, useEffect} from 'react'
import firebase from '../../config/Firebase'

const Dashboard = () => {

    const [productName, setProductName] = useState ('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState ([]);
    const [button, setButton] = useState ("Simpan");
    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        firebase.database().ref('products').on('value', (res) => {
            if(res.val()){
                //Ubah menjadi array object
                const rawData = res.val();
                const productArr = [];
                Object.keys(rawData).map(item => {
                    productArr.push({
                        id: item,
                        ...rawData[item],
                    })
                });
                setProduct(productArr);
            }
        })
    }, [])

    const resetForm = () => {
        setProductName('');
        setPrice('');
        setButton('Simpan');
        setSelectedProduct({});
    }

    const onSubmit = () => {
        const data = {
            productName: productName,
            price: price,
        }
        if(button === 'Simpan'){
            //Insert
            firebase.database().ref('products').push(data);
        }else {
            //Update
            firebase.database().ref(`products/${selectedProduct.id}`).set(data);
        }
        resetForm();
    }

    const onUpdateData = (item) =>{
        setProductName(item.productName);
        setPrice(item.price);
        setButton("Ganti");
        setSelectedProduct(item);
    }

    const onDeleteData = (item) =>{
        //delete
        firebase.database().ref(`products/${item.id}`).remove();
    }

    return (
        <div className="container mt-5">
            <h3>Dashboard</h3>
            <div className="col-6">
            <p>Peralatan Rumah</p>
            <input className="form-control" placeholder="nama produk" value={productName} onChange={(e)=>setProductName(e.target.value)} />
            <p>Harga</p>
            <input className="form-control" placeholder="harga produk" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <br />
            <button className="btn btn-primary" onClick={onSubmit} >{button}</button>
            {
                button === 'Ganti' && (<button className={"btn btn-secondary"} onClick={resetForm} >Batal Ganti</button>)
            }
            </div>
            <hr />
            <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Peralatan Rumah</th>
                    <th>Harga</th>
                    <th>Pengaturan</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map(item => (
                        <tr key={item.id}>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => onUpdateData(item)} >Ganti</button>
                                <button className="btn btn-danger" onClick={() => onDeleteData(item)} >Hapus</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    )
}

export default Dashboard