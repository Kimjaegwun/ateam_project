import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import styled from "styled-components";
import DetailCard from "../components/DetailCard";
import Header from "../components/Header";
import { Error, Loading } from "../components/Loading";
import { Content, Img } from "../style/styles";

export type ProtoData = {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
};

const PartnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1130px;
  padding: 40px 155px;
`;

const DetailBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
`;

const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c2c2c2;
  font-size: 14px;
  font-weight: 600;
  padding: 40px 0px;
  width: 1130px;
  border-radius: 4px;
  color: #939fa5;
`;

const PartnerContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [protoData, setProtoData] = useState<ProtoData[]>([]);

  const [method, setMethod] = useState("");
  const [material, setMaterial] = useState<string[]>([]);
  const [select, setSelect] = useState("");
  const [counsel, setCounsel] = useState(false);

  const changeSelect = useCallback(
    (check: string) => () => {
      if (check === select) {
        setSelect("");
        setCounsel(false);
      } else {
        setSelect(check);
        setCounsel(false);
      }
    },
    [select]
  );

  const inputMethod = useCallback(
    (input: string) => () => {
      if (method === input) {
        setMethod("");
        setCounsel(false);
      } else {
        setMethod(input);
        setCounsel(false);
      }
    },
    [method]
  );

  const resetFilter = useCallback(() => {
    setMethod("");
    setMaterial([]);
    setSelect("");
  }, []);

  const inputMaterial = useCallback(
    (input: string) => () => {
      const findInput = material.findIndex((elem) => elem === input);
      if (findInput === -1) {
        setMaterial([...material, input]);
      } else {
        const newMaterial = material.filter((item) => item !== input);
        setMaterial(newMaterial);
      }
    },
    [material]
  );

  const toggleCounsel = useCallback(() => {
    setCounsel(!counsel);
    setMethod("");
    setMaterial([]);
    setSelect("");
  }, [counsel]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios(`http://localhost:3001/requests`);

        setProtoData(result.data);
        setLoading(false);
      } catch {
        setError(true);
      }
    };

    fetchData();
  }, []);

  const sortData = protoData.filter((proto) => {
    const findMethod = proto.method.findIndex((elem) => elem === method);
    const findMaterial = proto.material.filter((elem) =>
      material.includes(elem)
    ).length;

    if (counsel) {
      return proto.status === "상담중";
    } else if (method) {
      if (material.length !== 0) {
        return findMethod !== -1 && findMaterial !== 0;
      } else {
        return findMethod !== -1;
      }
    } else if (material.length !== 0) {
      return findMaterial !== 0;
    } else if (!method && material.length === 0) {
      return proto;
    }
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <PartnerWrapper>
      <Header />
      <ContentBoxWrapper>
        <Title />

        <SelectData
          method={method}
          material={material}
          select={select}
          counsel={counsel}
          changeSelect={changeSelect}
          inputMethod={inputMethod}
          inputMaterial={inputMaterial}
          resetFilter={resetFilter}
          toggleCounsel={toggleCounsel}
        />

        <DetailBoxWrapper>
          {sortData.length === 0 && (
            <EmptyWrapper>조건에 맞는 견적 요청이 없습니다.</EmptyWrapper>
          )}
          {sortData.length !== 0 &&
            sortData.map((data: ProtoData, index) => {
              return <DetailCard key={data.id} data={data} index={index} />;
            })}
        </DetailBoxWrapper>
      </ContentBoxWrapper>
    </PartnerWrapper>
  );
};

const TitleBox = styled.div`
  margin-bottom: 32px;
`;

const Title = React.memo(() => {
  return (
    <TitleBox>
      <Content size="20px" weight="900">
        들어온 요청
      </Content>
      <Content size="16px" weight="500">
        파트너님에게 딱 맞는 요청서를 찾아보세요.
      </Content>
    </TitleBox>
  );
});

const SelectBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 20px 7px 12px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    border: 1px solid #2196f3;
  }
`;

const OptionBox = styled.div`
  position: absolute;
  border: 1px solid #939fa5;
  padding: 17px 12px;
  margin-top: 4px;
  width: 72px;
  border-radius: 4px;
  background-color: #ffffff;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 10px;
  }
`;

const CheckBox = styled.button`
  background-color: #2196f3;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  margin-right: 10px;
  border-width: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyBox = styled.button`
  background-color: white;
  border: 2px solid #939fa5;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  margin-right: 10px;
`;

const Option = styled.div`
  display: flex;
  font-size: 14px;
`;

const FilterBox = styled.div`
  display: flex;
  margin-left: 24px;
  cursor: pointer;
`;

const CounselBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const SelectData = ({
  method,
  material,
  select,
  counsel,
  changeSelect,
  inputMethod,
  inputMaterial,
  resetFilter,
  toggleCounsel,
}: {
  method: string;
  material: string[];
  select: string;
  counsel: boolean;
  changeSelect: (check: string) => void;
  inputMethod: (input: string) => void;
  inputMaterial: (input: string) => void;
  resetFilter: () => void;
  toggleCounsel: () => void;
}) => {
  const methodElement = ["밀링", "선반"];
  const materialElement = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

  return (
    <SelectBoxWrapper>
      <div style={{ marginRight: "8px" }}>
        <SelectBox
          style={{
            width: "64px",
            backgroundColor: method ? "#1565C0" : "#FFFFFF",
            color: method ? "#FFFFFF" : "#323D45",
          }}
          onClick={changeSelect("가공방식") as any}
        >
          {method || "가공방식"}
          <Img
            src={method ? "/images/arrow_white.png" : "/images/arrow.png"}
            alt="arrow-img"
            width="10px"
            height="5px"
            style={{ marginLeft: "12px" }}
          />
        </SelectBox>
        <OptionBox style={{ display: select === "가공방식" ? "" : "none" }}>
          {methodElement.map((option: any) => {
            return (
              <OptionWrapper key={option}>
                <Option onClick={inputMethod(option) as any}>
                  {method === option ? (
                    <CheckBox>
                      <Img
                        src="/images/check.png"
                        alt="check-img"
                        width="14px"
                        height="10px"
                      />
                    </CheckBox>
                  ) : (
                    <EmptyBox />
                  )}
                  {option}
                </Option>
              </OptionWrapper>
            );
          })}
        </OptionBox>
      </div>

      <div>
        <SelectBox
          style={{
            backgroundColor: material.length > 0 ? "#1565C0" : "#FFFFFF",
            color: material.length > 0 ? "#FFFFFF" : "#323D45",
          }}
          onClick={changeSelect("재료") as any}
        >
          재료{material.length > 0 ? `(${material.length})` : ""}
          <Img
            src={
              material.length > 0
                ? "/images/arrow_white.png"
                : "/images/arrow.png"
            }
            alt="arrow-img"
            width="10px"
            height="5px"
            style={{ marginLeft: "12px" }}
          />
        </SelectBox>
        <OptionBox
          style={{ width: "100px", display: select === "재료" ? "" : "none" }}
        >
          {materialElement.map((option) => {
            const findInput = material.findIndex((item) => item === option);
            return (
              <OptionWrapper
                key={option}
                onClick={inputMaterial(option) as any}
              >
                <Option>
                  {findInput !== -1 ? (
                    <CheckBox>
                      <Img
                        src="/images/check.png"
                        alt="check-img"
                        width="14px"
                        height="10px"
                      />
                    </CheckBox>
                  ) : (
                    <EmptyBox />
                  )}
                  {option}
                </Option>
              </OptionWrapper>
            );
          })}
        </OptionBox>
      </div>

      <FilterBox onClick={resetFilter}>
        <Img
          src="/images/filter.png"
          alt="check-img"
          width="16px"
          height="16px"
        />
        <Content
          size="12px"
          weight="500"
          style={{ marginLeft: "12px", color: "#2196F3" }}
        >
          필터링 리셋
        </Content>
      </FilterBox>

      <CounselBox>
        <Switch
          checked={counsel}
          onChange={toggleCounsel}
          onColor="#86d3ff"
          offColor="#C2C2C2"
          onHandleColor="#2693e6"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          height={16}
          width={34}
        />
        <Content size="14px" weight="900" style={{ marginLeft: "16px" }}>
          상담 중인 요청만 보기
        </Content>
      </CounselBox>
    </SelectBoxWrapper>
  );
};

export default PartnerContainer;
