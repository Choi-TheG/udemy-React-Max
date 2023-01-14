// default를 import하면 파일명은 사용자 마음대로.
// 언제나 default를 표시한 곳을 참조하므로
// 아래 예시처럼 person을 하든 prs를 하든 상관없음
import person from "./person.js";
import prs from "./person.js";

// name export.
// 두 개의 다른 상수를 불러오는데 그 파일에서 특정한 것을 정확히 가르키기 위해
// 중괄호로 지정을 해줌. 이름 정확하게 지정해줘야함
import { clean } from "./utility.js";
import { baseData } from "./utility.js";
import { clean, baseData } from "./utility.js";
// as로 import한 문서 내에서 사용할 이름을 지정할 수도 있음.
// 모든 것을 export하고싶을 땐 * 사용
import { clean as cln } from "./exam.js";
import * as bundled from "./exam.js";
