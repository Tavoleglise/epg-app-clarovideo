interface FormatedTimeProps {
  hours: number;
  minutes: number;
}

const FormatedTime: React.FC<FormatedTimeProps> = ({ hours, minutes }) => {
  return (
    <>{`${hours < 10 ? "0" + hours : hours} : ${
      minutes < 10 ? "0" + minutes : minutes
    }`}</>
  );
};

export default FormatedTime;
