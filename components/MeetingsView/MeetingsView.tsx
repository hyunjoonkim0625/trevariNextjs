import React from "react";
import { inject, observer } from "mobx-react";
import { IClub } from "../../interfaces";

import MeetingsSearch from "./MeetingsSearch";

import "./MeetingsView.scss";
import MeetingsStore from "../../stores/MeetingsStore";

interface MeetingsViewProps {
  clubList: IClub[];
  meetingsStore: MeetingsStore;
}

interface MeetingsViewState {
  value?: string;
  items: number;
}

@inject("meetingsStore")
@observer
class MeetingsView extends React.Component<
  MeetingsViewProps,
  MeetingsViewState
> {
  state = {
    value: "",
    items: 5
  };

  // 컴포넌트가 렌더되었을 때 보여지는 아이템의 갯수를 제한
  componentDidMount() {
    const debouncedScroll = debounced(1000, this.onScroll);

    this.props.meetingsStore.fetchClubList();

    window.addEventListener("scroll", debouncedScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  // 검색 필터링을 위한 핸들러
  handleSearch = (value: string) => {
    // FIXED: 이런 콜백 함수의 경우 react에 타입이 이미 정의된 경우가 많아요. ex) React.FormEvent<HTMLInputElement>
    return (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      this.props.meetingsStore.search(value);
    };
  };
  // 렌더 시 화면 맨 상단으로

  // 스크롤이 화면 맨 아래에 도착했는지 확인하는 핸들러
  onScroll = (): void => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 250
    ) {
      this.setState(prevState => ({
        items: prevState.items + 6
      }));
    }
  };

  render() {
    const { items } = this.state;
    const {
      clubList,
      searchedList,
      isSearched,
      state
    } = this.props.meetingsStore;
    const loading = state;

    const currentlyShownList = isSearched === false ? clubList : searchedList;
    const hasData: boolean = currentlyShownList.length > 0 ? true : false;

    return (
      <div className="MeetingsView">
        <div className="MeetingsView__header">
          <p className="MeetingsView__header__text">
            내 일정에 맞는 놀러가기 클럽을 찾으신다면?
          </p>
          <input
            className="MeetingsView__header__button"
            type="button"
            value="독서모임 캘린더 바로가기"
          />
          <MeetingsSearch handleSearch={this.handleSearch} />
        </div>

        {loading === "done" ? (
          hasData ? (
            <div>
              {/* FIXED: currentlyShownList가 없는 경우가 없을 것 같아 해당 체킹은 생략해도 괜찮을 것 같아요. */}
              {/* 초기 상태값에 []를 할당하기 때문에 */}
              {currentlyShownList
                .slice(0, items)
                // FIXED: 여기도 any 자제! -> 맞는 방법일까?

                .map((item, index: number) => {
                  return (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <div
                      className="MeetingsView__clubList__content"
                      key={index}
                    >
                      <div className="MeetingsView__clubList__content__image">
                        <img src={item.imgSrc} alt={item.bookTitle} />
                        {item.clubRep ? (
                          <p className="MeetingsView__clubList__content__image__clubRep">
                            클럽장 {item.clubRep}님
                          </p>
                        ) : null}
                        {item.trevariDesigned ? (
                          <p className="MeetingsView__clubList__content__image__trevari">
                            트레바리가 디자인한 클럽
                          </p>
                        ) : null}

                        <div className="MeetingsView__clubList__content__image__clubInfo">
                          <p>{item.clubName}</p>
                          <p>{item.clubDescription}</p>
                        </div>
                      </div>

                      <p className="MeetingsView__clubList__content__bookTitle">
                        {item.bookTitle}
                      </p>
                      <p className="MeetingsView__clubList__content__location">
                        {item.location}
                      </p>
                      <p className="MeetingsView__clubList__content__time">
                        {item.time}
                      </p>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="MeetingsView__notFound">
              <div>검색 결과가 없습니다.</div>
            </div>
          )
        ) : (
          <div className="spinner">
            <div className="rect1" />
            <div className="rect2" />
            <div className="rect3" />
            <div className="rect4" />
            <div className="rect5" />
          </div>
        )}
      </div>
    );
  }
}

export default MeetingsView;

// debouncer

function debounced(delay: number, fn: any) {
  let timerId: any;
  return function(...args: any) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}
