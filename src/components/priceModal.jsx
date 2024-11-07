import React, { useRef, useMemo } from "react";

export default function PriceModal({ data, setOpen, priceInformation }) {
  const pricesList = useRef(
    data.map((item) => ({ massage: item.title, prices: item.prix }))
  );

  const times = useMemo(() => {
    let timeData = [];

    pricesList?.current?.forEach((item) => {
      item.prices.forEach((it) => {
        if (!timeData.includes(it.time)) {
          timeData = [...timeData, it.time];
        }
      });
    });
    return timeData;
  }, [pricesList]);

  return (
    <>
      <div className="priceModal-container">
        <div className="priceModal">
          <button className="priceModal-toggle" onClick={setOpen}>
            <span />
            <span />
          </button>
          <h2 className="priceModal-title">Tarifs:</h2>
          <table>
            <tbody>
              <tr>
                <th>Massage</th>
                {times
                  .sort((a, b) => (parseInt(a) < parseInt(b) ? -1 : 1))
                  .map((it, key) => (
                    <th key={key}>{it} min</th>
                  ))}
              </tr>
              {pricesList?.current?.map((item, key) => (
                <tr key={key}>
                  <td>{item.massage}</td>
                  {times.map((it, key) => {
                    return (
                      <td key={key}>
                        {item?.prices?.find((price) => price.time === it)
                          ? `${
                              item?.prices?.find((price) => price.time === it)
                                .price
                            } €`
                          : ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="priceModal-information">{priceInformation}</p>
        </div>
      </div>
    </>
  );
}
