import Form from "./form";
import BaseInput from "./baseInput";
import Checkbox from "./checkbox";
import FloatInput from "./androidInput";
import Input from "./input";
import Select from "./select";
import Switch from "./switch";

import Alert from "./alert";
import Badge from "./badge";
import Panel from "./panel";
import Slide from "./slideShow/slide";
import SlideShow from "./slideShow";
import Progress from "./progress";
import PercentageStats from "./stats/percentageStats";
import NumberStats from "./stats/numberStats";
import Footer from './footer';
import Spin from './spin';
import AutoComplete from './autoComplete';
import Card from './card';
import Tab from './tab';
import ImageText from './imageText';
import NotificationPanel from './notificationPanel';
import Seo from './seo';
import './index.css';
/**
 * <DatePicker
selected={this.state.date}
onChange={this.handleChange}
showTimeSelect
dateFormat="LLL" />
 */
import DatePicker from './datePicker';
import Table from './table';

export default {
  Form: Form,
  Panel: Panel,
  Alert: Alert,
  SlideShow: SlideShow,
  Progress: Progress,
  Slide: Slide,
  PercentageStats: PercentageStats,
  NumberStats: NumberStats,
  Badge: Badge,
  Spin: Spin,
  Footer: Footer,
  DatePicker: DatePicker,
  AutoComplete: AutoComplete,
  Card: Card,
  Tab: Tab,
  FloatInput: FloatInput,
  Input: Input,
  Table: Table,
  Switch: Switch,
  Select: Select,
  ImageText: ImageText,
  NotificationPanel: NotificationPanel,
  Seo: Seo,
  Checkbox: Checkbox,
  BaseInput: BaseInput
};