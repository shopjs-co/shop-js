export default function Layout({ children, ...props }) {
  return(
    <Box sx={ sx.root  }>
      <Box sx={ sx.container  }>
        { children }
      </Box> 
    </Box> 
  )
}

const sx = {
  root: {
    height: '100vh'
  },
  container: {
    height: '100%'
  },
}
