import './portfolioList.scss'

export const PortfolioList = ({title, active, setSelected}) => {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(title)}>
        {title}
    </li>
  )
}
