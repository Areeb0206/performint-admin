import Styled from 'styled-components';

const ProjectHeader = Styled.div`
    margin: 20px 0 10px;
    @media (max-width: 991px){
        margin: 5px 0 5px;
    }
    @media (max-width: 767px){
        margin: 10px 0 10px;
    }
    .ant-page-header.ninjadash-page-header-main{
        padding: 18px 30px 15px;
    }
    .ant-page-header-heading{
        .ant-page-header-heading-title{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            @media only screen and (max-width: 767px){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            }
        }
    }
    .ant-page-header-heading-sub-title{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        position: relative;
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
        font-weight: 500;
        &:before{
            position: absolute;
            content: '';
            width: 1px;
            height: 24px;
            background: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
            top:0;
        }
    }
`;

const ProjectSorting = Styled.div`
    margin-bottom: 25px;
    .project-sort-bar{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 -10px;
        @media only screen and (max-width: 1299px){
            // flex-direction: column;
            justify-content: space-between;
        }
        .project-sort-group{
            @media only screen and (max-width: 1150px){
                flex: 0 0 100%;
                display: flex;
                justify-content: center;
            }
        }
        .project-sort-nav,
        .project-sort-search,
        .project-sort-group{
            padding: 0 10px;
        }
        .project-sort-nav{
            @media only screen and (max-width: 1150px){
                margin: 0 auto;
            }
        }

        .project-sort-group{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: auto;
            @media only screen and (max-width: 1299px){
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 0;
            }
            @media only screen and (max-width: 1199px){
                margin: 15px 0 0;
            }
        }
        .project-sort-search{
            @media only screen and (max-width: 1299px){
                margin: 15px 0;
            }
            @media only screen and (max-width: 1199px){
                margin: 0 0 15px;
            }
            .ant-select-selection-search{
                width: 100% !important;
            }
        }
        nav{
            ul{
                li{
                    
                    a{
                        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                        &:hover{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 1500px){
        .project-sort-search{
            .ant-select{
                width: 237px !important;
            }
        }
        .project-sort-group .sort-group{
            .ant-select{
                min-width: 180px;
            }
        }
    }
    @media (min-width: 1201px) and (max-width: 1300px) {
        .project-sort-search{
            .ant-select{
                width: 170px !important;
            }
        }
        .project-sort-group{
            padding: 0 5px;
            
        }
        .project-sort-group .sort-group .layout-style a{
            width: 35px;
            height: 35px;
        }
        .project-sort-group .sort-group .ant-select {
            min-width: 170px;
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 5px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
        }
    }
    @media (max-width: 1199px){
        .project-sort-search{
            flex: 0 0 100%;
            order: 0;
            margin-bottom: 25px;
            display: flex;
            justify-content: center;
            .ant-select{
                width: 350px !important;
            }
        }
        .project-sort-nav{
            order: 1;
            margin: 0 auto;
        }
        .project-sort-group{
            order: 2;
        }
    }
    @media (max-width: 991px){
        .project-sort-group{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: unset;
            flex: 0 0 100%;
            margin-top: 15px;
            .sort-group{
                justify-content: flex-start;
                .layout-style{
                    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: auto;
                }
            }
        }
    }
    @media (max-width: 575px){
        .project-sort-group{
            .sort-group{
                > span{
                    display: none;
                }
            }
        }
    }

    nav{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 5px;
        padding: 9px 20px;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 12px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 11px;
                ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                &:last-child{
                    ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                }
                a{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    font-weight: 400;
                }
                &.active{
                    a{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
    }
    .ant-select-selection-search-input{
        border: 0 none;
        border-radius: 23px;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        input{
            height: 40px !important;
            border-radius: 23px;
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        }
        .ant-input-suffix{
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
        }
    }
    .ant-select-arrow{
        right: auto;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 11px !important;
        svg{
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
    }
    
    .sort-group{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        display: flex;
        align-items: center;
        justify-content: flex-end;

               
        .ant-select{
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 10px;
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            @media only screen and (max-width: 575px){
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0px;
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
            }
            min-width: 260px;
            .ant-select-selector{
                border: 0 none;
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                .ant-select-selection-item{                    
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                
            }
        }
        .layout-style{
            display: flex;
            align-items: center;
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
            a{
                display: flex;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                &:hover,
                &.active{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                }
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    @media (max-width: 400px){
        .sort-group .ant-select{
            min-width: 200px;
        }
        .project-sort-search{
            .ant-select-auto-complete{
                width: 100% !important;
            }
        }
        .project-sort-nav{
            nav{
                padding: 10px;
            }
            nav ul{
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: -5px;
                li{
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                    margin-bottom: 5px;
                }
            }
        }
    }
`;

const ProjectCard = Styled.div`
    .ant-card-body{
        padding: 0px !important;
    }
    .project-top{
        padding:30px 30px 0px;
    }
    .project-bottom{
        .project-assignees{
            padding: 16px 30px 25px;
        }
    }
    .project-title{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        h1{
            font-size: 16px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: -2px;
            a{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 11px !important;
            }
            a,
            .ant-tag{
                margin: 2px;
            }
            .ant-tag{
                text-transform: uppercase;
                font-size: 10px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                line-height: 18px;
                background: red;
                color: #fff;
                border: 0 none;
                &.early{
                    background: ${({ theme }) => theme['primary-color']};
                }
                &.progress{
                    background: #FF4D4F;
                }
                &.late{
                    background: ${({ theme }) => theme['warning-color']};
                }
                &.complete{
                    background: ${({ theme }) => theme['success-color']};
                }
            }
        }
        .ant-dropdown-trigger{
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            }
        }
    }
    .project-desc{
        margin: 7px 0 25px 0;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .project-timing{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        div{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            &:last-child{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
            }
            span, strong{
                display: block;
            }
            span{
                font-size: 12px;
                margin-bottom: 2px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            strong{
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .project-progress{
        p{
            margin: 2px 0 0 0;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            font-size: 12px;
        }
        .ant-progress-text{
            font-size: 12px;
            font-weight: 500;
        }
    }
    .ant-progress{
        &.ant-progress-status-success{
            .ant-progress-text{
                svg{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
        }
    }
    .project-assignees{
        border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        margin-top: 17px;
        padding-top: 16px;
        p{
            font-size: 14px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        ul{
            margin: -3px;
            padding: 0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            li{
                list-style: none;
                padding: 3px;
                img{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
        }
    }
`;

const ProjectPagination = Styled.div`
    .ant-pagination{
        display: flex;
        justify-content: flex-end;
        @media only screen and (max-width: 767px) {
            justify-content: center;
        }
    }
`;

const ProjectListTitle = Styled.div`
    h1{
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 5px;
        a{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    p{
        margin: 0;
        font-size: 12px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
`;

const ProjectListAssignees = Styled.div`
    ul{
        margin: -3px;
        padding: 0;
        display: flex;
        align-items: center;
        li{
            list-style: none;
            padding: 3px;
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }
`;

const ProjectList = Styled.div`

    .project-list-progress{
        p{
            margin: 4px 0 0 0;
            font-size: 13px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .date-started,
    .date-finished{
        font-weight: 500;
    }
    .ant-table{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .ant-table-thead{
            tr{
                th{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                    border-bottom-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                }
            }
        }
        .ant-table-tbody{
            tr{
                &:hover{
                    td{
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
                .ant-tag{
                    &.progress{
                        background-color: #FF4D4F;
                    }
                    &.late{
                        background-color: ${({ theme }) => theme['warning-color']};
                    }
                    &.complete{
                        background-color: ${({ theme }) => theme['success-color']};
                    }
                }
                td{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    border-bottom-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                }
            }
            .ant-progress{
                &.ant-progress-status-success{
                    .ant-progress-text{
                        svg{
                           color: ${({ theme }) => theme['success-color']};
                        }
                    }
                }
            }
            .ant-dropdown-trigger {
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    .ant-table-container table > thead > tr th{
        font-weight: 400;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    .ant-table-container table > thead > tr th:first-child{
        border-radius: ${({ theme }) => (theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
        ${({ theme }) => (!theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
    }
    .ant-table-container table > thead > tr th:last-child{
        border-radius: ${({ theme }) => (!theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
    }
    .ant-dropdown-trigger{
        svg{
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
    }
`;

const ProjectDetailsWrapper = Styled.div`
    .ant-page-header{
        padding-top: 30px;
    }
    .project-header{
        display: flex;
        align-items: center;
        margin: 8px 0 16px;
        @media only screen and (max-width: 800px) {
            flex-wrap: wrap;
        }
        @media only screen and (max-width: 575px) {
            flex-flow: column;
            button{
                margin: 15px 0 0;
            }
        }
        h1{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
            margin-bottom: 0;
            font-size: 20px;
            @media only screen and (max-width: 800px) {
                margin-bottom: 10px;
            }
            @media only screen and (max-width: 575px) {
                margin: 0;
            }
        }
        button{
            font-size: 12px;
            font-weight: 500;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            height: 35px;
            padding: 0px 13.5px;
            &.btn-markComplete{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                transition: .25s;
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-deep']};
                &:hover{
                    color: ${({ theme }) => theme['primary-color']};
                    svg{
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
    }
    .project-action{
        .project-edit,
        .project-remove{
            border-radius: 6px;
            background: #fff;
            height: 35px;
            padding: 0 15px;
            font-size: 12px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 5px;
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            box-shadow: 0 3px 5px ${({ theme }) => theme[theme.mainContent]['gray-text']}05;
            svg,
            img{
                width: 14px;
                height: 14px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
            }
        }
        .project-edit{
            color: ${({ theme }) => theme['primary-color']};
        }
        .project-remove{
            color: ${({ theme }) => theme['danger-color']};
        }
    }
    .project-progress{
        border-radius: 10px;
        background: ${({ theme }) => theme['success-color']};
        padding: 20px 25px 20px;
        margin-bottom: 25px;
        h3{
            color: #fff;
        }
        
        .ant-progress{
            .ant-progress-inner{
                background: rgba(255,255,255, 0.2);
            }
            .ant-progress-bg{
                background: rgb(255, 255, 255);
            }
            .ant-progress-text{
                color: #fff;
                font-weight: 500;
            }
        }
    }
    .about-project-wrapper{
        min-height: 485px;
        border-radius: 10px;
        margin-bottom: 25px;
        @media only screen and (max-width: 1199px) {
            min-height: auto;
        }
    }
    .state-single{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        &:last-child{
            margin-bottom: 0;
        }
        > div{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        }
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 12px;
            background: rgba(95,99,242,0.1);
            svg{
                width: 25px;
                height: 25px;
            }
        }
        h1{
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 3px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            margin: 0;
        }
        .color-primary{
            a{
                background: rgba(251,53,34,0.1);
                svg{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
        .color-secondary{
            a{
                background: rgba(95,99,242,0.1);
                svg{
                    color: ${({ theme }) => theme['secondary-color']};
                }
            }
        }
        .color-success{
            a{
                background: rgba(32,201,151,0.1);
                svg{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
        }
        .color-warning{
            a{
                background: rgba(250,139,12,0.1);
                svg{
                    color: ${({ theme }) => theme['warning-color']};
                }
            }
        }
    }
    .about-content{
        p{
            font-size: 15px;
            line-height: 25px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .about-project{
        margin: 42px -40px 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        @media only screen and (max-width: 991px) {
            margin: 42px -25px 0;
        }
        @media only screen and (max-width: 575px) {
            margin: 42px -15px 0;
        }
        div{
            margin: 0 40px;
            @media only screen and (max-width: 991px) {
                margin: 0 25px;
            }
            @media only screen and (max-width: 575px) {
                flex: 0 0 38%;
                margin: 0 15px;
            }
            span{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                font-size: 13px;
                display: block;
                margin-bottom: 3px;
            }
            p{
                font-weight: 500;
            }
            .color-primary{
                color: ${({ theme }) => theme['primary-color']};
            }
            .color-danger{
                color: ${({ theme }) => theme['danger-color']};
            }
        }
    }
    .project-users-wrapper{
        .btn-addUser{
            padding: 0px 12.6px;
            font-size: 12px;
            font-weight: 500;
            transition: .25s;
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            &:hover{
                svg{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
        i +span, svg +span, img +span {
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
        }
    }
    .project-users{
        min-height: 368px;
        .porject-user-single{
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            &:last-child{
                margin-bottom: 0;
            }
            & > div{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            }
            div{
                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    object-fit: cover;
                    display: block;
                }
                h1{
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 2px;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                p{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    margin: 0;
                }
            }
        }
    }

    .file-list{
        min-height: 385px;
        .file-list__single{
            justify-content: space-between;
            align-items: center;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                display: block;
                font-size: 12px;
                line-height: 1.42;
                &.file-name{
                    font-size: 14px;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                &.file-size{
                    margin: 2px 0;;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                &.file-content-action{
                    a{
                        font-weight: 500;
                        color: ${({ theme }) => theme['primary-color']};
                    }
                    a + a{
                        margin-left: 8px;
                    }
                }
            }
        }
        .file-single-info{
            width: 50%;
            align-items: center;
            .file-single-logo{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
                img{
                    max-width: 42px;
                }
            }
        }
        .file-single-action{
            .ant-dropdown-trigger {
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }

    .dropdown-more{
        a{
            font-size: 13px;
            svg,
            i.
            img{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
            }
        }
    }
`;

const TaskLists = Styled.div`
    .ant-card{
        .ant-card-head{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            margin-bottom: 0;
        }
        .ant-card-body{
            padding: 0 !important;
        }
    }
    nav{
        a{
            font-size: 14px;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            position: relative;
            padding: 20px 0px;
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 18px;
            }
            &:before{
                position: absolute;
                content: '';
                width: 100%;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                bottom: -1px;
                height: 1px;

            }
            &.active{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                &:before{
                    background: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
        }
    }
    .ant-table{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    table{
        margin-top: 15px;
        .ant-checkbox.ant-checkbox-checked{
            .ant-checkbox-inner{
                background: ${({ theme }) => theme['success-color']};
                border-color: ${({ theme }) => theme['success-color']};
            }
            &:after{
                border-color: ${({ theme }) => theme['success-color']};
            }
        }
        thead{
            display: none;
        }
        tr{
            th{
                background: #fff;
                border-bottom: 0;
                padding: 10px;
                &:first-child{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 25px;
                }
                .ant-checkbox-indeterminate {
                    .ant-checkbox-inner{
                        &:after{
                            background: ${({ theme }) => theme['success-color']};
                        }
                    }
                }
            }
            &:hover{
                td{
                    background: #fff;
                }
            }
        }
        .ant-table-tbody{
            > tr.ant-table-row{
                &.ant-table-row-selected{
                    > td{
                        background: #fff;
                    }
                    .task-title{
                        text-decoration: line-through;
                    }
                }
                > td{
                    padding: 10px;
                    border-bottom: 0;
                    text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
                    &:first-child{
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 25px;
                    }
                    &:last-child{
                        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 25px;
                    }
                    .task-title{
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    }
                    .task-created{
                        font-size: 12px;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    }
                    .ant-checkbox{
                        &:hover{
                            .ant-checkbox-inner{
                                border-color: ${({ theme }) => theme['success-color']};
                            }
                        }
                    }
                }
                &:hover{
                    box-shadow: 0 15px 50px ${({ theme }) => theme[theme.mainContent]['gray-text']}20;
                    > td{
                        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
            }
        }
    }

    .tasklist-action{
        margin: 18px 25px 25px;
        button{
            width: 100%;
            text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
            justify-content: flex-start;
            font-size: 12px;
            font-weight: 500;
            &.ant-btn-primary{
                border-radius: 6px;
                background: ${({ theme }) => theme['primary-color']}10;
            }
        }
    }
`;

const TasklistAction = Styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 -10px;
    span, img, div{
        display: block;
        margin: 0 10px;
        line-height: normal;
    }
    span, a{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .task-created{
        color: #9299b8 !important;
    }
    .task-move{
        svg,
        i{
            width: 16px;
            height: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
    }
    .task-action{
        svg,
        i{
            width: 16px;
            height: 16px;
        }
    }
`;

const ActivitiesWrapper = Styled.div`
    padding: 25px;
    min-height: 435px;
    .activity-block{
        &:not(:last-child){
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
    }
    .activity-dateMeta{
        height: 100%;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        @media only screen and (max-width: 575px) {
            height: auto;
            padding: 30px 0px;
            margin-bottom: 25px;
        }
        h1{
            font-size: 18px;
            margin-bottom: 0px;
        }
        .activity-month{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    .activity-single{
        &:not(:last-child){
            margin-bottom: 25px;
        }
        .activity-single__figure{
            min-width: 76px;
        }
        .activity-icon{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            margin: ${({ theme }) => (theme.rtl ? '4px 0 0 10px' : '4px 10px 0 0')};
            &.bg-primary{
                background: ${({ theme }) => theme['primary-color']}15;
                color: ${({ theme }) => theme['primary-color']};
            }
            &.bg-secondary{
                background: ${({ theme }) => theme['secondary-color']}15;
                color: ${({ theme }) => theme['secondary-color']};
            }
            &.bg-success{
                background: ${({ theme }) => theme['success-color']}15;
                color: ${({ theme }) => theme['success-color']};
            }
            svg{
                width: 16px;
                height: 16px;
            }
        }
        img{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
        }
        .activity-title{
            font-size: 14px;
            font-weight: 500;
            margin: -4px 0 0;
            span{
                font-weight: 400;
                margin: 0 2px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        .activity-timeMeta{
            font-size: 12px;
            margin-bottom: 0;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
    }
`;

const Main = Styled.div`
    padding: 0px 30px 20px;
    min-height: 715px;
    background-color: transparent;
    &.grid-boxed{
        padding: 0px 180px 20px;
        @media only screen and (max-width: 1599px){
            padding: 0px 130px 20px;
        }
        @media only screen and (max-width: 1399px){
            padding: 0px 50px 20px;
        }
        @media only screen and (max-width: 991px){
            padding: 0px 30px 20px;
        }
    }

    .doughnutchart-inner{
        position: relative;
        .doughnutchart-inner-text{
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            width: 200px;
            line-height: 1;
            margin-bottom: 0px;
            display: inline-block;
            transform: translate(-50%, -50%);
            .doughnutchart-inner-content{
                font-size: 30px;
                font-weight: 600;
                line-height: 1;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                display: block;
            }
            .doughnutchart-inner-label{
                font-size: 15px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        canvas{
            margin: 0 auto;
        }
    }
    .ant-switch{
        .anticon svg{
            color: #fff;
        }
    }
    /* ant breadcrumb */
    .ant-breadcrumb {
        a{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
    .page-header-actions{
        .ant-btn-white{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            &:hover{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']} !important;
            }
        }
    }
    /* Card Title */
    .ant-card{
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-card{
        &.ninjadash-ghost-card{
            .ant-card-body{
                background: linear-gradient(90deg, rgb(95, 99, 242), rgb(255, 105, 165));
            }
        }
    }
    
    .ant-card-head-title{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .ant-card-bordered{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    .ant-card-head{
        border-bottom-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .ninjadash-card-title-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .ninjadash-card-title-text{
                font-size: 18px;
                font-weight: 600;
                display: inline-block;
                ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                .ninjadash-card-subtitile{
                    font-size: 12px;
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            .ninjadash-card-title-extra-text{
                display: flex;
                align-items: center;
                position: relative;
                top: 3px;
                .ninjadash-total-chart-total{
                    font-size: 18px;
                    font-weight: 600;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    @media only screen and (max-width: 991px){
                        font-size: 15px;
                    }
                }
                .ninjadash-total-chart-status{
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 500;
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
                    @media only screen and (max-width: 991px){
                        font-size: 12px;
                    }
                    i,
                    svg{
                        width: 22px;
                        height: 22px;
                        margin-right: -1px;
                        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: -1px;
                        @media only screen and (max-width: 991px){
                            width: 18px;
                            height: 18px;
                        }
                    }
                    &.ninjadash-total-chart-status-growth{
                        color: ${({ theme }) => theme['success-color']};
                    }
                    &.ninjadash-total-chart-status-down{
                        color: ${({ theme }) => theme['danger-color']};
                    }
                }
            }
        }
    }

    .ant-card-body{
        p{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    .ninjadash-card-nav{
        ul{
            display: flex;
            align-items: center;
            margin: 0 -10px 2px 0;
            margin: ${({ theme }) => (!theme.rtl ? '0 -10px 2px 0' : '0 0 2px -10px')};
            li{
                margin: 5px 0;
                a{
                    font-size: 13px;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    border-radius: 6px;
                    min-height: 30px;
                    padding: 0 12px;
                    transition: .3s;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    &:hover{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
                &.ninjadash-active{
                    a{
                        background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
    }

    .ant-card-rtl .ant-card-extra{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0 !important;
        
    }
    .ant-tabs-tab span svg {        
        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 5px;
    }
    .ant-btn{
        &.ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
            &.btn-transparent,
            &.btn-outlined{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &.btn-outlined:hover{
                color: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    /* Pagination Style */
    .ant-pagination-item{
        border-radius: 4px;
    }
    .ant-pagination-item a{
        font-weight: 400;
    }
    .ant-pagination-next svg{
        fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-pagination-options .ant-select-selector{
        padding: 0 6.5px
    }
    .ant-pagination-options .ant-select .ant-select-arrow{
        svg{
            width: 10px;
            fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
    /* Picker Under Input */
    .ant-form-item-control-input .ant-picker {
        padding: ${({ theme }) => (theme.rtl ? '0 0 0 12px' : '0 12px 0 0')} !important;
    }

    /* progressbars */

    .ant-progress {
        display: inline-flex !important;
        align-items: center;
        .ant-progress-inner{
            /* background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']}; */
            background-color: transparent;
        }
        .ant-progress-text{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-progress-circle-trail{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        }
    }

    .ant-progress>div {
        display: flex;
        flex-direction: column;
    }

    .ant-progress .ant-progress-outer {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0 !important;
        ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }

    .ant-progress .ant-progress-text {
        order: 0;
        align-self: flex-end;
        text-align: center;
    }

    .ant-progress-status-warning .ant-progress-bg {
        background: #fa8b0c;
    }

    /* progress bars */
    
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }
    @media only screen and (max-width: 991px){
        min-height: 580px;
    }
    .w-100{
        width: 100%;
    }
    .product-sidebar-col{
        @media only screen and (max-width: 767px){
            order: 2;
        }
    }
    .ant-skeleton-paragraph{
        margin-bottom: 0;
    }

    /* Button Group */
    .ant-btn-group{
        .ant-btn-default{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']}; 
        }
    }

    /* ant skeleton */
    .ant-skeleton{
        &.ant-skeleton-active{
            .ant-skeleton-content {
                .ant-skeleton-title{
                    background: linear-gradient(90deg, ${({ theme }) =>
                      theme[theme.mainContent]['border-color-default']} 25%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']} 37%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} 63%);
                    background-size: 400% 100%;
                }
                .ant-skeleton-paragraph{
                    >li{
                        background: linear-gradient(90deg, ${({ theme }) =>
                          theme[theme.mainContent]['border-color-default']} 25%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']} 37%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} 63%);
                        background-size: 400% 100%;
                    }
                }
            }
            .ant-skeleton-avatar{
                background: linear-gradient(90deg, ${({ theme }) =>
                  theme[theme.mainContent]['border-color-default']} 25%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']} 37%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} 63%);
                background-size: 400% 100%;
            }
        }
        .ant-skeleton-content {
            .ant-skeleton-title{
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
            .ant-skeleton-paragraph{
                >li{
                    background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                }
            }
        }
        .ant-skeleton-header{
            .ant-skeleton-avatar{
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
    }

    /* ant picker */
    .ant-picker{
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        input{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &::placeholder{
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            }
        }
        .ant-picker-suffix{
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    /* ant checkbox */
    .ant-checkbox{
        &:hover{
            .ant-checkbox-inner{
                border-radius: 4px;
            }
        }
        &.ant-checkbox-checked{
            &:after{
                border-color: ${({ theme }) => theme['primary-color']};
                border-radius: 4px;
            }
            .ant-checkbox-inner{
                background-color: ${({ theme }) => theme['primary-color']};
                border-color: ${({ theme }) => theme['primary-color']};
                &:after{
                    top: 44%;
                    border-color: #fff;
                }
            }
        }
        &.ant-checkbox-indeterminate{
            .ant-checkbox-inner{
                &:after{
                    background-color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }
    .ant-checkbox-wrapper{
        &.ant-checkbox-wrapper-disabled{
            opacity: .5;
        }
        .ant-checkbox{
            &+span{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-checkbox-wrapper,
    .ant-checkbox{
        &:hover{
            .ant-checkbox-inner{
                border-color: ${({ theme }) => theme['primary-color']};
            }
        }
        .ant-checkbox-input{
            &:focus{
                &+.ant-checkbox-inner{
                    border-color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }
    .ant-checkbox-inner{
        border-radius: 4px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-checkbox']};
    }

    /* ant alert */
    .ant-alert-closable{
        .ant-alert-message{
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
    }

    .ant-alert-with-description .ant-alert-description{
        display: inline-block;
    }

    /* ant Calendar Picker */
    .ant-picker-calendar{
        .ant-badge-status-text{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .ant-picker-calendar-header .ant-picker-calendar-year-select{
        @media only screen and (max-width: 400px){
            width: 50% !important;
        }
    }
    .ant-picker-calendar-header .ant-picker-calendar-month-select{
        @media only screen and (max-width: 400px){
            width: calc(50% - 8px) !important
        }
    }

    /* Card Grid */
    .card-grid-wrap{
        .ant-card-grid{
            @media only screen and (max-width: 575px){
                width: 50% !important
            }
        }
    }

    /* Drawer */
    .atbd-drawer{
        .ant-card-body{
            text-align: center;
            .ant-drawer-wrapper-body {
                text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
            }
        }
    }
    .drawer-placement{
        @media only screen and (max-width: 400px){
            text-align: center;
        }
        .ant-radio-group{
            @media only screen and (max-width: 400px){
                margin-bottom: 15px;
            }
        }
    }
    .ant-drawer-content-wrapper{
        @media only screen and (max-width: 400px){
            width: 260px !important;
        }
        @media only screen and (max-width: 375px){
            width: 220px !important;
        }
    }

    /* Input */
    .input-wrap{
        @media only screen and (max-width: 991px){
            min-height: 500px;
        }
        input::placeholder{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
    }
    /* Modal Buttons */
    .modal-btns-wrap{
        margin: 0 -5px;
    }
    /* spinner */
    .ant-spin{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        &:last-child{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
    }

    /* Column Cards Wrapper */
    .columnCardsWrapper{
        background: ${({ theme }) => theme[theme.mainContent]['dark-background']};
        border-radius: 4px;
        padding: 50px 30px 25px;
    }
    .columnCardsWrapper .ant-card{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    .columnCardsWrapper .ant-card-head{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    .ant-card-grid{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        box-shadow: 1px 0 0 0 ${({ theme }) => theme[theme.mainContent]['border-color-default']}, 0 1px 0 0 ${({
  theme,
}) => theme[theme.mainContent]['border-color-default']}, 1px 1px 0 0 ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']}, 1px 0 0 0 ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} inset, 0 1px 0 0 ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} inset     
    }

    /* Ant Collapse */
    .ant-collapse{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        border-radius: 6px;
        > .ant-collapse-item{
            &:last-child{
                border-radius: 0 0 6px 6px;
                background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                >.ant-collapse-header{
                    border-radius: 0 0 6px 6px;
                }
            }
            .ant-collapse-item{
                &:last-child{
                    background-color: transparent;
                }
                .ant-collapse-header{
                    border-radius: 6px;
                }
            }
            .ant-collapse-content{
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                .ant-collapse-content-box{
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                }
            }
        }
        .ant-collapse-header{
            .ant-collapse-header-text{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .ant-collapse.ant-collapse-icon-position-left .ant-collapse-header{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        padding: 12px 16px 10px 45px;
        background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
        @media only screen and (max-width: 1299px){
            padding: 12px 16px 10px 30px;
        }
    }
    .ant-collapse-content p{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        margin-bottom: 0;
    }
    .ant-collapse-content > .ant-collapse-content-box {
        padding: 20px 20px 20px;
    }
    .ant-collapse-content > .ant-collapse-content-box .ant-collapse-content-box{
        padding: 10.5px 20px;
    }
    .ant-collapse.ant-collapse-borderless{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        > .ant-collapse-item{
            &:last-child{
                border-radius: 0px;
            }
        }
    }
    .ant-collapse > .ant-collapse-item,
    .ant-collapse .ant-collapse-content{
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    .ant-collapse > .ant-collapse-item.ant-collapse-item-disabled .ant-collapse-header{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']} !important;
    }

    .ant-collapse > .ant-collapse-item .ant-collapse-header .ant-collapse-arrow{
        font-size: 8px;
        position: relative;
        top: ${({ theme }) => (!theme.rtl ? '-3px' : '0')};
        right: 0;
    }

    .ant-collapse .ant-collapse {
        border: 0 none;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }

    .ant-collapse .ant-collapse > .ant-collapse-item {
        border-bottom: 0;
    }
    .ant-collapse .ant-collapse .ant-collapse-header{
        border-radius: 6px 6px 0 0;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        background: ${({ theme }) => theme[theme.mainContent]['light-background']};
    }
    .ant-collapse .ant-collapse .ant-collapse-content{
        margin: 20px 0 0 0;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        border-radius: 0;
    }

    /* Ant Radio */
    .ant-radio-wrapper{
        .ant-radio{
            &+span{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within{
        box-shadow: 0 0;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){
        background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child{
        border-right-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child{
        border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-radio-button-wrapper{
        height: 48px;
        line-height: 46px;
        padding: 0 25.25px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        @media only screen and (max-width: 1024px){
            padding: 0 10px;
        }
        @media only screen and (max-width: 379px){
            height: 40px !important;
            line-height: 38px !important;
            font-size: 12px;
            padding: 0 6px;
        }
        &:not(:first-child){
            &:before{
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
        &.ant-radio-button-wrapper-checked{
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
        }
    }

    /* Select */
    .ant-tree-select .ant-select-selector{
        height: 42px;
    }
    .ant-select:not(.ant-select-customize-input) {
        .ant-select-selector{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
    }
    .tag-select-list{
        margin-bottom: -10px;
        .ant-select{
            margin-bottom: 10px;
        }
    }
    .ant-select-selector{
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']} !important;
    }

    .ant-select{
        .ant-select-selector {
            .ant-select-selection-item{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        &.ant-select-disabled{
            opacity: .6;
        }
        &.ant-select-multiple{
            .ant-select-selection-item{
                height: 24px;
                align-items: center;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 8px;
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
        
        &.ant-select-lg{
            height: 50px;
            line-height: 48px;
            .ant-select-selector{
                height: 50px !important;
                line-height: 48px;
            }
            .ant-select-selection-item{
                line-height: 48px !important;
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 8px;
            }
            &.ant-select-multiple.ant-select-lg .ant-select-selection-item{
                height: 32px;
                line-height: 32px !important;
            }
        }
        &.ant-select-multiple.ant-select-sm{
            .ant-select-selection-item{
                height: 16px;
                line-height: 14px;
                font-size: 11px;
            }
        }
        .ant-select-arrow{
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    /* Slider */
    .slider-with-input{
        .ant-slider{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
        .slider-with-input__single{
            margin-bottom: 15px;
        }
        .ant-input-number{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        .ant-input-number-input{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
    }

    .ant-slider-mark-text{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .anticon svg{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }

    .ant-slider-handle{
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']}
    }

    /* ant input */
    .ant-input,
    .ant-input-affix-wrapper{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        &:focus{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            box-shadow: 0 0;
        }
        input.ant-input{
            &:focus{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                box-shadow: 0 0 !important;
            }
        }
    }

    .ant-input-affix-wrapper{
        &:not(.ant-input-affix-wrapper-disabled){
            &:hover{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
    }
    .ant-input-affix-wrapper-focused{
        box-shadow: 0 0;
    }

    /* Taglist */
    .ant-tag{
        margin: 5px;
    }
    .taglist-wrap{
        margin: -5px;
        .ant-tag {
            line-height: 22px;
            padding: 0 10.2px;
            border: 0 none;
            margin: 5px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &.ant-tag-has-color{
                color: #fff !important;
            }
            &.ant-tag-magenta{
                color: #eb2f96;
            }
            &.ant-tag-red{
                color: #f5222d;
            }
            &.ant-tag-volcano{
                color: #fa541c;
            }
            &.ant-tag-orange{
                color: #fa8c16;
            }
            &.ant-tag-gold{
                color: #faad14;
            }
            &.ant-tag-line{
                color: #a0d911;
            }
            &.ant-tag-green{
                color: #a0d911;
            }
            &.ant-tag-cyan{
                color: #13c2c2;
            }
            &.ant-tag-blue{
                color: #1890ff;
            }
            &.ant-tag-geekbule{
                color: #2f54eb;
            }
            &.ant-tag-purple{
                color: #722ed1;
            }
        }
    }

    .ant-tag {
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        a{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        svg{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    /* ant empty */

    .ant-empty-description{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    /* Steps style */
    .ant-steps-item-finish,
    .ant-steps-item-wait {
        .ant-steps-item-icon{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
        > .ant-steps-item-container {
            > .ant-steps-item-content {
                > .ant-steps-item-title{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
    }

    .steps-content{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-steps-item-wait {
        .ant-steps-item-icon{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            .ant-steps-icon{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    .ant-steps-item-process{
        > .ant-steps-item-container {
            > .ant-steps-item-content {
                > .ant-steps-item-title{
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
            }
        }
    }

    /* Timepicker List */
    .timepicker-list{
        margin: -5px;
        .ant-picker{
            margin: 5px;
        }
    }

    /* ant statistics */

    .ant-statistic {
        .ant-statistic-title{
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        .ant-statistic-content{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-statistic-content{
        .anticon {
            &.anticon-arrow-up{
                svg{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
            &.anticon-arrow-down{
                svg{
                    color: ${({ theme }) => theme['danger-color']};
                }
            }
        }
    }

    /* Ant Menu */
    .ant-menu{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        .ant-menu-submenu-title{
            svg,
            .ant-menu-title-content,
            .ant-menu-submenu-arrow{
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
            &:active{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
            }
        }
        .ant-menu-item{
            &:active{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
            }
            &.ant-menu-item-selected{
                &:after{
                    border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
                .ant-menu-item-icon{
                    svg{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
                .ant-menu-title-content{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
            &.ant-menu-item-disabled{
                .ant-menu-item-icon{
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
                .ant-menu-title-content{
                    opacity: .5;
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
            }
            &.ant-menu-item-active{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
        .ant-menu-submenu {
            &.ant-menu-submenu-selected{
                .ant-menu-submenu-title{
                    span{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
        &.ant-menu-inline{
            .ant-menu-submenu-title svg{
                position: relative;
                top: 2px;
            }
            .ant-menu-submenu {
                &.ant-menu-submenu-open,
                &.ant-menu-submenu-active{
                    .anticon {
                        svg{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                    svg{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                    .ant-menu-submenu-arrow{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
        &:not(.ant-menu-horizontal){
            .ant-menu-item-selected,
            .ant-menu-submenu-open{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                &.ant-menu-item-active{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
        }
    }

    .ant-menu-horizontal{
        &:not(.ant-menu-dark){
            > .ant-menu-submenu{
                &:hover{
                    .ant-menu-submenu-title{
                        svg,
                        .ant-menu-title-content{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                    &:after{
                        border-bottom-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
    }

    /* ant result */
    .ant-result{
        &.ant-result-success{
            .anticon svg{
                color: ${({ theme }) => theme['success-color']};
            }
        }
        &.ant-result-info{
            .anticon svg{
                color: ${({ theme }) => theme['info-color']};
            }
        }
        &.ant-result-warning{
            .anticon svg{
                color: ${({ theme }) => theme['warning-color']};
            }
        }
        &.ant-result-error{
            .anticon svg{
                color: ${({ theme }) => theme['danger-color']};
            }
        }
        .ant-result-title{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .ant-result-subtitle{
            font-size: 13px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-result-content{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            .ant-typography{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                a{
                    margin-left: 4px;
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                }
            }
        }
    }

    .ant-result-extra{
        .ant-btn-default{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        }
    }

    /* Ant Comment */
    .ant-comment-inner{
        padding: 0;
        .ant-comment-content-author,
        .ant-comment-content-author-name{
            >*{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-comment-content-detail p{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
    .ant-list-items{
        padding-top: 22px;
    }
    .ant-list-items li:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment-nested{
        margin-top: 22px;
    }
    .ant-comment-actions li span{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
    }
    .ant-comment-content-detail textarea{
        resize: none;
        min-height: 170px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    }
    .nested-comment-wrapper  {
        .comment-title{
            font-size: 12px;
            padding-bottom: 10px;
            margin-bottom: 22px;
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
        
    }

    .ant-list-split .ant-list-header{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }

    /* ant list */
    .ant-list{
        &.ant-list-bordered{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
        .ant-list-item-meta{
            padding: 10px 24px; 
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        .ant-list-item-meta-description{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    /* Vector Map */
    .rsm_map{
        min-height: 505px;
        .world-map{
            width: 100%;
            height: auto;
            @media only screen and (max-width: 1599px){
                height: 480px;
            }
            @media only screen and (max-width: 1399px){
                height: 400px;
            }
            @media only screen and (max-width: 575px){
                height: 400px;
            }
            @media only screen and (max-width: 767px){
                height: 300px;
            }
            @media only screen and (max-width: 575px){
                height: 250px;
            }
            @media only screen and (max-width: 479px){
                height: 350px;
            }
            @media only screen and (max-width: 375px){
                height: 240px;
            }
        }
        .controls{
            position: absolute;
            right: 30px;
            bottom: 30px;
            button{
                display: block;
                width: 27px;
                height: 27px;
                background: none;
                color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                padding: 0;
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                cursor: pointer;
                &:first-child{
                    border-radius: 6px 6px 0 0;
                }
                &:last-child{
                    border-radius: 0 0 6px 6px;
                }
                &:focus{
                    outline: none;
                }
                svg{
                    width: 10px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            button + button{
                border-top: 0 none;
            }
        }
    }

    /* Checkout Wrapper */
    .checkoutWraper{
        .ant-card-body{
            padding: 50px 50px 50px 30px !important;
            @media only screen and (max-width: 575px){
                padding: 15px !important;
            }
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px){
                    padding: 15px !important;
                }
            }
        }
        .ant-steps{
            margin-top: 0;
        }
        .step-action-wrap{
            @media only screen and (max-width: 1599px){
                margin-bottom: 50px;
            }
            @media only screen and (max-width: 767px){
                margin-bottom: 30px;
            }
        }
    }

    /* Star Active */
    a{
        i,
        span.fa{
          font-size: 16px;
          color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
        &.starDeactivate{
          i:before{
            content: "\f31b";
          }
        }
        &.starActive{
          i,
          span.fa{
            color: ${({ theme }) => theme['warning-color']};
          }
          i:before,
          span.fa:before{
            color: ${({ theme }) => theme['warning-color']};
            content: "\f005";
    
          }
        }
    }

    .ant-timeline{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        .ant-timeline-item-content{
            font-size: 16px;
        }
    }

    .ant-timeline-item-tail{
        border-width: 3px;
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }

    
    .ant-rate-content{
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-rate-text{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-rate{
        .anticon {
            svg{
                color: #FA8B0C;
            }
        }
    }

    .ant-rate-star.ant-rate-star-zero span svg{
        color: #c6d0dc;
    }

    .account-card{
        .ant-card-head{
            .ant-card-extra{
                @media only screen and (max-width: 575px){
                   padding-top: 0 !important;
                }
            }
            
        }
                
    }

    /* Rechart */
    .recharts-default-legend{
        .recharts-legend-item{
            min-width: 100px !important;
        }
    }

    /*  Radio */
    .ant-radio{
        &.ant-radio-disabled{
            opacity: .4;
            &+span{
                opacity: .4;
            }
        }
    }
    .radio-size-wrap{
            .ant-radio-button-wrapper{
                @media only screen and (max-width: 1450px){
                    padding: 0 11.5px;
            }
        }
    }
    .ant-radio-wrapper:hover .ant-radio, 
    .ant-radio:hover .ant-radio-inner, 
    .ant-radio-input:focus + .ant-radio-inner{
        border-color: ${({ theme }) => theme['primary-color']};
        outline: none;
        box-shadow: 0 0;
    }

    .ant-radio-inner{
        transition: 0s;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    }
    .ant-radio-checked{
        .ant-radio-inner{
            border-color: ${({ theme }) => theme['primary-color']};
        }
    }

    .ant-radio-button-wrapper{
        &.ant-radio-button-wrapper-disabled{
            opacity: .4;
        }
    }

    .ant-radio-button-wrapper{
        &.ant-radio-button-wrapper-checked{
            &.ant-radio-button-wrapper-disabled{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
    }
    

    /* Message  */
    .message-button-list{
        margin: -4px;
        .ant-btn {
            margin: 4px;
        }
    }
    /* Chart Label */

    .chart-label {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6px;
        color: #5a5f7d;
    }

    .chart-label .label-dot {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
    }

    .chart-label .label-dot.dot-success {
        background: #20c997;
    }

    .chart-label .label-dot.dot-info {
        background: #5f63f2;
    }

    .chart-label .label-dot.dot-warning {
        background: #fa8b0c;
    }

    .chart-label .label-dot {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
    }

    // Ant comment action
    .ant-comment-actions{
        li{
            position: relative;
            &:not(:last-child){
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
                ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 8px;
                &:after{
                    position: absolute;
                    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1px;
                    height: 12px;
                    background-color: #C6D0DC;
                    content: '';
                }
            }
            .com-time{
                cursor: default;
            }
            span{
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0;
            }
        }
    }

    // Emoji Picker React
    .emoji-picker-react{
        top: 15px;
        right: 25px;
        box-shadow: 0 5px 10px #efefef10;
        @media only screen and (max-width: 479px){
            top: 25px;
            right: -50px;
            width: 260px;
        }
        .emoji-categories{
            padding: 0 10px;
        }
        .emoji-search{
            margin: 0 10px;
        }
        .content-wrapper:before{
            display: none;
        }
        .emoji-group{
            padding: 0 10px;
        }
        .emoji-group:before{
            font-size: 12px;
            font-weight: 600;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .emoji-group .emoji-img{
            margin: 5px !important;
        }
    }

    .wizard-side-border{
        >.ant-card{
            .ant-card-body{
                padding: 0 25px !important;
            }
        }
        .checkout-successful{
            >.ant-card{
                .ant-card-body{
                    padding: 25px !important;
                    @media only screen and (max-width: 575px){
                        padding: 15px !important;
                    }
                }
            }
        }
        .payment-method-form.theme-light{
            .shipping-selection__card{
                .ant-card-body{
                    padding: 25px 0 !important;
                }
            }
        }
        .shipping-selection__card{
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px){
                    padding: 15px !important;
                }
            }
        }
        .atbd-review-order{
            .ant-card-body{
                padding: 25px 25px 0 !important;
                @media only screen and (max-width: 767px) {
                    padding: 15px 15px 0 !important;
                }
            }
        }
        
        .ant-steps {
            padding: 50px;
            @media only screen and (max-width: 1399px) {
                padding: 25px;
            }
        }
        .steps-wrapper{
            padding: 50px;
            @media only screen and (max-width: 1399px) {
                padding: 25px;
            }
            ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
        }
    }
    .editor-compose > div {
        position: static;
        max-width: 100%;
        margin: 0 0 25px;
    }

    // Ant Dragger
    .ant-upload-drag{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
        border-radius: 10px !important;
        display: flex;
        align-items: center;
        min-height: 100px;
        border-color: #C6D0DC;
        &.ninjadash-uploader-large{
            min-height: 180px;
        }
        .ant-upload-drag-container{
            .ant-upload-text{
                margin-bottom: 0;
                font-size: 15px;
                color: #9299B8;
            }
        }
    }

    .ant-upload{
        .ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &:hover{
                border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    .ant-upload-list-item{
        .ant-upload-list-item-info{
            border-radius: 6px;
            padding: 0px 8px;
            background-color: transparent;
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            a{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
    }

    // Form Validation
    .ant-form-item{
        &.ant-form-item-has-success{
            .ant-input{
                border-color: ${({ theme }) => theme['success-color']};
            }
            &.ant-form-item-with-help{
                .ant-form-item-explain{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
        }
        &.ant-form-item-with-help{
            .ant-form-item-explain{
                margin-top: 6px;
            }
        }
    }
    /* Order Summery */
    .ninjadash-order-summery{
        background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
    }

    .ant-table{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }

    .ant-table-thead {
        > tr {
            > th{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .ant-table-tbody{
        >tr{
            >td{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &:hover{
                >td{
                    background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                }
            }
        }
    }
    .ant-btn-transparent,
    .btn-outlined,
    .ant-btn-white
    {
        .anticon-loading{
            svg{
                color: ${({ theme }) => theme['primary-color']};
            }
        } 
    }
    .anticon-loading{
        svg{
            color: #fff;
        }
    }

    .ninjadash-action-count{
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 8px;
    }
`;

const BasicFormWrapper = Styled.div`
    .ant-form {
        .form-item{
            margin-bottom: 30px;
            label{
                font-weight: 500;
                display: block;
                margin-bottom: 15px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            .ant-cascader-picker{
                width: 100%;
                min-height: 48px;
                .ant-cascader-input{
                    min-height: 48px;
                }
            }
        }
        .ant-input-affix-wrapper > input.ant-input{
            padding-top: 12px;
            padding-bottom: 12px;
        }
        .ant-input-affix-wrapper .ant-input-prefix svg{
            color: #9299B8;
        }
        .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
            position: relative;
            top: -2px;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
        }
    }
    .ant-form-item-control-input{
        min-height: auto !important;
    }
    .ant-form-item,
    .ant-form-item-row{
        flex-flow: column;
        &:not(:last-child){
            margin-bottom: 26px;
        }
        &:last-child{
            margin-bottom: 0;
        }
        .ant-form-item-label{
            text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
            label{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                height: fit-content;
                margin-bottom: 6px;
            }
        }
        .ant-form-item-control-input{
            input,
            textarea{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                &:placeholder{
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                }
            }
            .ant-picker-input input{
                padding: 12px;
            }
            button{
                height: 44px;
            }
            .ant-switch{
                height: 18px;
            }
            .ant-input-affix-wrapper{
                padding: 0 20px;
            }
        }
        .ant-select {
            .ant-select-arrow{
                svg{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
        .ant-select-single{
            .ant-select-selector{
                padding: 0 20px;
                height: 50px !important;
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
                .ant-select-selection-item{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    line-height: 46px !important;
                    padding: 0 !important;
                }
                .ant-select-selection-placeholder{
                    line-height: 46px !important;
                }
            }
        }
        .ant-radio-group {
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .setting-form-actions{
        margin: 48px 0 14px;
        @media only screen and (max-width: 575px){
            margin: 40px 0 14px;
        }
        button{
            border-radius: 6px;
            height: 44px;
            margin-bottom: 14px;
            &.ant-btn-light{
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-form-item-control-input{
        .input-prepend{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            height: 48px;
            border-radius: ${({ theme }) => (theme.rtl ? '0 4px 4px 0' : '4px 0 0 4px')};
            z-index: 10;
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            svg,
            i{
                color:${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            svg{
                width: 16px;
                height: 16px;
            }
        }
        .input-prepend-wrap{
            .ant-input-number{
                input{
                    ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 70px;
                }
            }
        }
        .ant-input-number{
            width: 100% !important;
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        }
    }
    .add-record-form{
        margin: 25px 0 35px 0;
        
        .record-form-actions{
            padding-right: 40px;
        }
        .ant-btn{
            height: 44px;
            font-size: 14px;
            font-weight: 500;
        }
        .ant-radio-group{
            margin-bottom: -4px;
            .ant-radio-wrapper{
                margin-bottom: 4px;
            }
        }
    }
    .adTodo-form{
        .btn-adTodo {
            font-size: 14px;
        }
    }

    .ninjadash-form-action{
        margin: -7.5px;
        button{
            font-size: 14px;
            font-weight: 500;
            border-radius: 6px;
            margin: 7.5px;
            padding: 6.4px 19px;
            &.ant-btn-light{
                height: 44px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-btn-light{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
        }
    }
    .ninjadash_color-picker{
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        border-radius: 4px;
        padding: 11px 14px;
        input{
            width: 100%;
            border: 0 none;
            background-color: #fff;
            &::-webkit-color-swatch{
                min-height: 18px;
                border: 1px solid #C6D0DC;
            }
        }
    }
    .ant-input-number{
        .ant-input-number-input{
            min-height: 46px;
        }
    }
`;

const ComplaintFormWrap = Styled.div`
  border-radius: 6px;
  margin-top: 25px;
//   background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  .ninjadash-authentication-top{
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    .ninjadash-authentication-top__title{
      font-size: 20px;
      font-weight: 600;
      line-height: 1;
      margin-bottom: 0;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
  }
  .ninjadash-authentication-content{
    .ant-form-item-label {
      > label{
        font-size: 14px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
    }
    .ant-form-item{
      margin-bottom: 25px;
    }
    .ant-input:focus, 
    .ant-input-focused{
      box-shadow: 0 5px 20px rgba(251,53,134,.10);
    }
    .ant-input{
      &::placeholder{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      }
    }
    .ant-form-item-explain-error{
      font-size: 13px;
      margin-top: 2px;
    }
    .ninjadash-auth-extra-links{
      display: flex;
      justify-content: space-between;
      margin-top: -5px;
      .ant-checkbox-wrapper{
        span{
          font-size: 13px;
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
        .ant-checkbox{
          &+span{
            position: relative;
            top: -2px;
          }
        }
      }
      .forgot-pass-link{
        font-size: 13px;
        color: ${({ theme }) => theme['primary-color']};
      }
    }
    .ninjadash-form-divider{
      font-size: 13px;
      color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      text-align: center;
      position: relative;
      margin: 0 -10px 25px -10px;
      &:before{
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        height: 1px;
        background: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
      }
      span{
        font-weight: 500;
        padding: 0 15px;
        display: inline-block;
        position: relative;
        z-index: 2;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
    }
    .ant-input-affix-wrapper {
      &.ant-input-password{
        input{
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
      }
    }
    .ant-input-affix-wrapper{
      padding: 12px 20px;
    }
  }
  .ninjadash-authentication-bottom{
    text-align: center;
    padding: 25px;
    border-radius: 0 0 6px 6px;
    background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
    p{
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      margin-bottom: 0;
      a{
        margin-left: 6px;
        ${({ theme }) => theme['primary-color']};
      }
    }
  }
  .auth-contents{
    display: flex;
    align-items: center;
    justify-content: center;
    form{
      width: 420px;
      h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 45px;
        @media only screen and (max-width: 767px){
          margin-bottom: 28px;
        }
        input::placeholder{
          color: ${({ theme }) => theme['extra-light-color']};
        }
      }
      .auth-form-action{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: 379px){
          flex-flow: column;
          .forgot-pass-link{
            margin-top: 15px;
          }
        }
      }
    }
    #forgotPass{
      .forgot-text{
        margin-bottom: 25px;
      }
      .return-text{
        margin-top: 35px;
      }
    }
    
    
  }
  .auth0-login{
    margin: -6px;
    display: flex;
    flex-wrap: wrap;
  a{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      height: 48px;
      padding: 0 26px;
      background: ${({ theme }) => theme['bg-color-light']};
      color: ${({ theme }) => theme['text-color']};
      font-weight: 500;
      border: 0 none;
      border-radius: 5px;
      margin: 6px;
      flex: 1;
      @media (max-width:480px){
        flex: none;
        width: 100%;
      }
  }
}
`;

const ComplaintBrokerCard = Styled.div`
  .user-card{
    &.theme-list{
      .ant-card-body{
        padding: 30px 25px 30px 30px !important;
        @media only screen and (max-width: 479px){
          padding: 25px 20px 25px 20px !important;
        }
      }
      figure{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media only screen and (max-width: 479px){
          flex-flow: column;
        }
        img{
          max-width: 80px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}:20px;
          @media only screen and (max-width: 479px){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}:0px;
          }
        }
      }
      figcaption{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
        width: 100%;
        @media only screen and (max-width: 379px){
          flex-flow: column;
        }
      }
      .card__content{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        p{
          max-width: 400px;
          font-size: 15px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .card__designation{
            font-size: 13px;
            margin-bottom: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        .card-text{
          margin-bottom: 12px;
        }
        .card-info{
          margin-bottom: 0;
          .user-meta{
            font-size: 14px;
            strong{
              font-weight: 600;
              color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
          }
          .user-meta + .user-meta{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
          }
        }
      }
      .card__actions{
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        @media only screen and (max-width: 379px){
          margin-top: 15px;
        }
        button{
          padding: 0px 19.05px;
          min-width: 114px;
        }
      }
    }
    &.theme-grid-2{
      .ant-card-body{
        padding: 0 !important;
      }
      figure{
        position: relative;
      }
      .user-card__img{
        margin-bottom: 0;
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 132px;
        height: 132px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        z-index: 22;
        img{
          position: relative;
          top: 6px;
        }
      }
      .user-card__bg{
        background-size: cover !important;
        background-position: center !important;
        border-radius: 10px 10px 0 0;
      }
      .card__bottom{
        position: relative;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        top: -26px;
        padding-top: 102px;
        border-radius: 30px 30px 10px 10px;
      }
      .card__actions{
        @media only screen and (max-width: 1499px){
          flex-direction: row;
        }
      }
    }
    &.theme-grid-3{
      .ant-card{
        text-align: left;
      }
      .ant-card-body{
        padding: 0 !important;
      }
      .card__top,
      .card__content,
      .card__info{
        padding: 0 30px;
      }
      .card__top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 30px;
        margin-bottom: 10px;
        .user-card__img{
          margin-right: 12px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
          img{
            max-width: 70px;
          }
        }
        .user-card__info{
          width: 100%;
          position: relative;
          .action-more{
            position: absolute;
            right: 0;
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
            top: 0;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
          }
          .card__designation{
            margin-bottom: 0;
          }
        }
      }
      .card__content{
        p{
          font-size: 15px;
          margin-bottom: 26px;
        }
        .image-group{
          margin: -3px;
        }
        img{
          max-width: 34px;
          margin: 3px;
        }
      }
      .card__info{
        padding-bottom: 30px;
        padding-top: 18px;
        .ant-progress-inner{
          position: relative !important;
        }
        p{
          font-size: 12px;
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
        h2{
          font-size: 14px;
          font-weight: 500;
          margin-top: 4px;
          margin-bottom: 16px;
        }
        .info-line{
          display: flex;
          justify-content: space-between;
          .success{
            background-color: transparent;
            color: ${({ theme }) => theme['success-color']};
          }
        }
        .completed-count{
          margin-top: 4px;
        }
        .project-progress{
          display: flex;
          justify-content: space-between;
          .progress-percentage{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
            span{
              font-size: 12px;
              color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
          }
        }
      }
    }
  }
  .card{
    position: relative;
    box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}03;
    .ant-card-body{
      padding: 25px !important;
      @media only screen and (max-width: 575px){
        padding: 15px !important;
      }
      div{
        position: static;
      }
    }
    figure{
      margin-bottom: 0;
      img{
        margin-bottom: 20px;
        width: 100%;
        border-radius: 50%;
        max-width: 150px;
      }      
    }
    .card__more_actions{
      position: absolute;
      ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 24px;
      top: 20px;
      line-height: .5;
      padding: 5px 3px;
      border-radius: 10px;
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      svg,
      img{
        width: 20px;
      }
    }
    .card__name{
      font-size: 16px;
      margin-bottom: 6px;
      font-weight: 500;
      a{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        &:hover{
          color: ${({ theme }) => theme['primary-color']};
        }
      }
    }
    .card__designation{
      font-size: 13px;
      margin-bottom: 25px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
    .card__social{
      margin-top: 16px;
      a{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        &:not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        }
        &.facebook span.fa{
          color: #3B5998;
        }
        &.twitter span.fa{
          color: #1DA1F2;
        }
        &.dribble span.fa{
          color: #C2185B;
        }
        &.instagram span.fa{
          color: #FF0300;
        }
      }
    }
  }

  .user-card{
    .ant-card-body{
      padding: 30px 25px 18px 25px !important;
      @media only screen and (max-width: 1599px){
        padding: 20px  20px 20px !important;
      }
      @media only screen and (max-width: 767px){
        padding: 15px  15px 15px !important;
      }
    }
    figure{
      img{
        margin-bottom: 18px;
        max-width: 120px;
      }      
    }
    .card__actions{
      margin: -5px;
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 1499px){
        flex-direction: column;
      }
      .ant-btn-white{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        &:hover{
          border: 1px solid ${({ theme }) => theme['primary-color']};
        }
      }
      button{
        font-size: 13px;
        padding: 0px 22.7px;
        height: 38px;
        border-radius: 6px;
        box-shadow: 0px 3px 5px ${({ theme }) => theme[theme.mainContent]['light-text']}05;
        margin: 5px;
        &:hover{
          color: #fff !important;
          background-color: ${({ theme }) => theme['primary-color']} !important;
          svg,
          i{
            color: #fff;
          }
        }
        svg,
        i{
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
      }
    }
    .card__info{
      padding-top: 20px;
      margin-top: 18px;
      border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      .info-single{
        text-align: center;
      }
      .info-single__title{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 4px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      p{
        margin-bottom: 0;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
    }
  }
`;

const small = ({ rtl }) => {
  return `
      max-width: 600px;
      width: 100%;
      position: fixed;
      height: calc(100vh - 40%);
      bottom: 140px;
      ${!rtl ? 'right' : 'left'}: 15px;
      @media only screen and (max-width: 1450px){
        height: calc(100vh - 50%);
        bottom: 35%;
      }
      @media only screen and (max-width: 575px){
        min-height: 450px;
        bottom: 80px;
      }
  `;
};

const big = ({ rtl }) => {
  return `
    max-width: 1200px;
    width: 100%;
    position: fixed;
    min-height: 600px;
    bottom: 100px;
    ${!rtl ? 'right' : 'left'}: 100px;
    z-index: 988;
    `;
};
const MailBox = Styled.div`
  ${({ size, theme }) => size === 'small' && small(theme)}
  ${({ size, theme }) => size === 'big' && big(theme)}

  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  z-index: 988;
  border-radius: 10px;
  box-shadow: 0 10px 50px rgba(146, 153, 184, .19);
  @media only screen and (max-width: 575px){
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 0;
  }
  .reply-inner{
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
    &:focus,
    &:hover{
      border-color: ${({ theme }) => theme['primary-color']};
    }
  }
  input{
    border: 0 none;
    border-radius: 0px;
    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  }
  .react-tagsinput{
    width: 100%;
    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
    border: 0 none;
    input{
      border: 0 none;
      width: 100%;
    }
    input::placeholder{
      color: ${({ theme }) => theme[theme.mainContent]['light-text']};
    }
    .react-tagsinput-tag{
      padding: 5px 16px;
      border: 0 none;
      border-radius: 16px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      background: ${({ theme }) => theme[theme.mainContent]['general-background']};
      .react-tagsinput-remove{
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 8px;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      }
    }
  }
  .ant-upload-list{
    position: absolute;
    bottom: 15%;
    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 25px;
    width: 95%;    
  }
  input{
    padding: 15px 0;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    &:focus{
      box-shadow: 0 0;
    }
  }
  input::placeholder{
    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
  }

  .header {
    padding: 20px;
    color: ${({ theme }) => theme[theme.mainContent]['white-text']};
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    p {
      margin: 0;
      padding: 0;
    }
    .icon-right {
      svg {
        width: 18px;
        height: 18px;
        cursor: pointer;
        opacity: .70;
      }
      svg:first-child {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
      }
    }
  }
  .body {
    @media only screen and (max-width: 1599px){
      height: 450px;
      overflow-y: scroll;
    }
    @media only screen and (max-width: 1450px){
      height: 400px;
    }
    .group {
      padding: 0px 30px;
      position: relative;
      @media only screen and (max-width: 575px){
        padding: 0px 15px;
      }
      >div{
        box-shadow: 0 0;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border: none;
      }
      .mail-cc{
        position: absolute;
        ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 30px;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      }
      .DraftEditor-root{
        font-size: 14px;
        font-family: 'Jost', sans-serif;
      }
      .EditorToolbar__root___3_Aqz{
        font-family: 'Jost', sans-serif;
        border-bottom-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        .public-DraftStyleDefault-block{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          span{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          }
        }
      }
    }
    .public-DraftEditorPlaceholder-root{
      padding-top: 20px;
    }
    .public-DraftEditor-content {
      height: 275px;
      padding-top: 20px;
      @media only screen and (max-width: 1599px){
        height: 220px
      }
      @media only screen and (max-width: 1450px){
        height: 170px
      }
      @media only screen and (max-width: 575px){
        height: 160px
      }
    }
  }
  .footer {
    border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    padding: 20px 0 30px;
    margin: 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      button,
      a{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        line-height: 1;
        svg{
          width: 18px;
          height: 18px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
      }
      .ant-upload {
        margin-top: 4px;
          svg{
            width: 15px;
            height: 15px;
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
      }
      .ant-upload-list{
        overflow: hidden;
        .ant-upload-list-item{
          border-radius: 4px;
          height: 25px;
          line-height: 2.5;
          z-index: 10;
          background: ${({ theme }) => theme[theme.mainContent]['general-background']};
          .ant-upload-list-item-name{
            font-size: 13px;
          }
          .ant-upload-list-item-card-actions{
            top: -4px;
            line-height: 1;
          }
        }
      }
    }
    .right{
      line-height: 1;
      a{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        svg{
          width: 18px;
          height: 18px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
      }
    }
  }
`;

export {
  ProjectHeader,
  ProjectSorting,
  ProjectCard,
  ProjectPagination,
  ProjectListTitle,
  ProjectListAssignees,
  ProjectList,
  ProjectDetailsWrapper,
  TaskLists,
  TasklistAction,
  ActivitiesWrapper,
  Main,
  BasicFormWrapper,
  ComplaintFormWrap,
  ComplaintBrokerCard,
  MailBox,
};
