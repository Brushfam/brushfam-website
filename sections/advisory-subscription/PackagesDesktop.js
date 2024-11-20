import desktopStyles from "@/styles/advisory-subscription/PackagesDesktop.module.css";
import { desktopPackagesData } from "@/data/packagesData";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

export default function PackagesDesktop() {
  const TitleRowDiv = ({ name, price }) => {
    return (
      <div className={desktopStyles.titleRowDiv}>
        <p className={desktopStyles.titleName}>{name}</p>
        <p className={desktopStyles.titlePrice}>{price}</p>
      </div>
    );
  };

  const TitleRow = () => {
    return (
      <tr className={desktopStyles.titleRow} style={{}}>
        <th className={desktopStyles.cell1}></th>
        <th className={desktopStyles.cell2}>
          <TitleRowDiv name={"1h package"} price={"5.000$"} />
        </th>
        <th className={desktopStyles.cell3}>
          <TitleRowDiv name={"2h package"} price={"8.500$"} />
        </th>
        <th className={desktopStyles.cell4}>
          <TitleRowDiv name={"Unlimited package"} price={"20.000$"} />
        </th>
        <th className={desktopStyles.cell5}>
          <TitleRowDiv name={"Unlimited+ package"} price={"Negotiated"} />
        </th>
      </tr>
    );
  };

  const PackagesTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      background:
        "linear-gradient(139.23deg, rgba(144, 151, 170, 0.15) 0.14%, rgba(0, 0, 0, 0.15) 47.32%), rgba(29, 34, 48, 0.5)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(5px)",
      borderRadius: "6px",
      maxWidth: "180px",
      padding: "12px",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "400",
      fontSize: "10px",
    },
  }));

  return (
    <div className={desktopStyles.packagesTable}>
      <table style={{ borderSpacing: 0 }}>
        <tbody>
          <TitleRow></TitleRow>
          {desktopPackagesData &&
            desktopPackagesData.map((rowData, i) => {
              return (
                <tr key={i.toString()} className={desktopStyles.row}>
                  <th className={desktopStyles.cell1}>
                    <div className={desktopStyles.cell1Wrapper}>
                      <PackagesTooltip
                        title={rowData.tooltip}
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        followCursor
                      >
                        <img src={"icons/tip.svg"} className={desktopStyles.tipImg} />
                      </PackagesTooltip>
                      <p style={{ height: 13 }}>{rowData.cell1}</p>
                    </div>
                  </th>
                  <th className={desktopStyles.cell2}>
                    <p className={desktopStyles.cellWrapper}>{rowData.cell2}</p>
                  </th>
                  <th className={desktopStyles.cell3}>
                    <p className={desktopStyles.cellWrapper}>{rowData.cell3}</p>
                  </th>
                  <th className={desktopStyles.cell4}>
                    <p className={desktopStyles.cellWrapper}>{rowData.cell4}</p>
                  </th>
                  <th className={desktopStyles.cell5}>
                    <p className={desktopStyles.cellWrapper}>{rowData.cell5}</p>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
