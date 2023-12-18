import { useSelector ,useDispatch} from 'react-redux' 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { remove } from '../Store/CartSlice'
const Cart = ()=> {

const products = useSelector(state=>state.cart)

const dispatch = useDispatch();

const removeToCart =(id)=>{
dispatch(remove(id));
}

const card = products.map(product=> (

  <div className='col-md-12 d-flex justify-content-center' style={{marginBottom:'10px'}} >
     <Card key={product.id} className='h-100' style={{ width: '18rem' }}>
       <div className='text-center'>
         <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px' }}/>
         </div>
         <Card.Body>
         <Card.Title>{product.title}</Card.Title>
         <Card.Text>
          ${product.price}
         </Card.Text>
         </Card.Body>
     <Card.Footer style={{backgroundColor:'gray'}}> 
       <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item </Button>
     </Card.Footer>
   </Card>

</div>
))
  return (
<><h1> Hello is the place to leave</h1>
<div className='row'>{card }</div></>
    
  )
}

export default Cart