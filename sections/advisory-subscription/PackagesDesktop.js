import desktopStyles from "@/styles/advisory-subscription/PackagesDesktop.module.css";
import { desktopPackagesData } from "@/data/packagesData";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

export default function PackagesDesktop() {
  const TitleRow = () => {
    return (
      <tr className={desktopStyles.titleRow}>
        <th className={desktopStyles.cell1}></th>
        <th className={desktopStyles.cell2}>
          <div className={desktopStyles.titleRowDiv}>
            <p className={desktopStyles.titleName}>1h package</p>
            <p className={desktopStyles.titlePrice}>5.000$</p>
          </div>
        </th>
        <th className={desktopStyles.cell3}>
          <div className={desktopStyles.titleRowDiv}>
            <p className={desktopStyles.titleName}>2h package</p>
            <p className={desktopStyles.titlePrice}>8.500$</p>
          </div>
        </th>
        <th className={desktopStyles.cell4}>
          <div className={desktopStyles.titleRowDiv}>
            <p className={desktopStyles.titleName}>Unlimited package</p>
            <p className={desktopStyles.titlePrice}>20.000$</p>
          </div>
        </th>
        <th className={desktopStyles.cell5}>
          <div className={desktopStyles.titleRowDiv}>
            <p className={desktopStyles.titleName}>Unlimited+ package</p>
            <p className={desktopStyles.titlePrice}>Negotiated</p>
          </div>
        </th>
      </tr>
    );
  };

  const PackagesTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      background:
        "linear-gradient(139.23deg, rgba(144, 151, 170, 0.15) 0.14%, rgba(0, 0, 0, 0.15) 47.32%), rgba(29, 34, 48, 0.5)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(5px)",
      borderRadius: "6px",
        maxWidth: "178px",
        padding: "12px"
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
                  <th
                    className={desktopStyles.cell1}
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
                    <div className={desktopStyles.cell1Wrapper}>
                      <PackagesTooltip
                        title={rowData.tooltip}
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        followCursor
                      >
                        <img
                          src={"/tip.svg"}
                          className={desktopStyles.tipImg}
                        />
                      </PackagesTooltip>

                      <p style={{ height: 13 }}>{rowData.cell1}</p>
                    </div>
                  </th>
                  <th
                    className={desktopStyles.cell2}
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
                    <p className={desktopStyles.cellWrapper}>{rowData.cell2}</p>
                  </th>
                  <th
                    className={desktopStyles.cell3}
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
                    <p className={desktopStyles.cellWrapper}>{rowData.cell3}</p>
                  </th>
                  <th
                    className={desktopStyles.cell4}
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
                    <p className={desktopStyles.cellWrapper}>{rowData.cell4}</p>
                  </th>
                  <th
                    className={desktopStyles.cell5}
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
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
