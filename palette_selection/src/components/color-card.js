import React from 'react'
import { makeStyles } from '@mui/styles';


// const useStyles = makeStyles({
//   // style rule
//   foo: (props) => ({
//     backgroundColor: props.color.hex,
//   }),
//   bar: {
//     // CSS property
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'red',
//     height: 48,
//    
//   },
// });

// export default function Colorcard1(props) {
//   console.log(props)
//   const classes = useStyles(props.color);
//   // const { classes } = props;
//   const {hex,hsv,rgb} = props.color;
//     return(
//       <div class="card">
//         <div className={`${classes.foo}`}>
//             {hex}
//         </div>
//           <div class="container">
//             <h4><b>John Doe</b></h4>
//             <p>Architect & Engineer</p>
//           </div>
//       </div>
//     )
// }


const useStyles = makeStyles({
  // style rule
  foo: (props) => ({
    backgroundColor: props.color.hex,
    margin: '30px 30px 30px 30px ',
    height: 90,
    width: 75,
    textAlign: 'center',
  }),
  bar: {
    // CSS property
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: '30px 30px 30px 30px ',
    height: 90,
    width: 75,
    textAlign: 'center',
  },
  card: {
    color: 'black',
    hieght :100,
    width: 100,    //box-shadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2) ',
  transition: '0.3s',
  //border-radius: '5px',
},
});

export default function Colorcard1(props) {
  // Pass the props as the first argument of useStyles()
  const classes = useStyles(props);

  return (
    <div className='card'>
      <div className={`${classes.foo}`}>

        Hello
      </div>
    </div>);
}