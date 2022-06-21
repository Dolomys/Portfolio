import './portfolioList.scss'

export const PortfolioList = ({title,id, active, setSelected, dark}) => {

  console.log(dark)
  return (
    <li className={(active && dark ? "portfolioList active dark" : (active ? "portfolioList active" : "portfolioList")) } onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}
