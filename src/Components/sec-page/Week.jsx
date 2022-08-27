import React from 'react'
import './spage.css'

function Week() {
    return <>
        <div className="days">
            <div className="day-items">
                <div className="mo">
                    <p>Mo</p>
                    <p>18</p>
                </div>
            </div>
            <div className="day-items">
                <div className="tu">
                    <p>Tu</p>
                    <p>19</p>
                    <div className="dots">
                        <div className="dot1"></div>
                    </div>
                </div>
            </div>
            <div className="day-items">
                <div className="we">
                    <p>We</p>
                    <p>20</p>
                </div>
            </div>
            <div className="day-items">
                <div className="th">
                    <p>Th</p>
                    <p>21</p>
                    <div className="dots">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                        <div className="dot3"></div>
                    </div>
                </div>
            </div>
            <div className="day-items">
                <div className="fr">
                    <p>Fr</p>
                    <p>22</p>
                </div>
            </div>
            <div className="day-items">
                <div className="sa">
                    <p>Sa</p>
                    <p>23</p>
                    <div className="dots">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
            </div>
            <div className="day-items">
                <div className="su">
                    <p>Su</p>
                    <p>24</p>
                </div>
            </div>
        </div>
    </>
}

export default Week