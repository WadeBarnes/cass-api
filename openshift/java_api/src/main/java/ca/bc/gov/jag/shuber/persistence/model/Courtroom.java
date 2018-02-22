package ca.bc.gov.jag.shuber.persistence.model;

import ca.bc.gov.jag.shuber.persistence.AbstractAuditableVersionable;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;
import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

/**
 * Courtroom generated by Hibernate Tools hbm2java.
 *
 * <p>Domain model for database table courtroom.
 *
 * @author hbm2java
 * @version 1.0.0.243
 */
@Entity
@Table(name = "courtroom"
    // ,schema="shersched"
)
@Generated(
    value = "hbm2java",
    date = "2018-02-21 07:25:02",
    comments = "Generated by Hibernate Tools hbm2java."
)
public class Courtroom extends AbstractAuditableVersionable implements Serializable {
    /** UID. */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "location_id", nullable = false, updatable = false)
    private UUID locationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "courthouse_location_id")
    private Courthouse courthouse;

    @Column(name = "room_number", nullable = false, length = 20)
    private String roomNumber;
    /** No args constructor. */
    public Courtroom() {}

    /** Required args constructor. */
    public Courtroom(
            UUID locationId,
            String roomNumber,
            String createdBy,
            String updatedBy,
            Date createdDtm,
            Date updatedDtm,
            long revisionCount) {
        this.locationId = locationId;
        this.roomNumber = roomNumber;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.createdDtm = createdDtm;
        this.updatedDtm = updatedDtm;
        this.revisionCount = revisionCount;
    }

    /** All args constructor. */
    public Courtroom(
            UUID locationId,
            Courthouse courthouse,
            String roomNumber,
            String createdBy,
            String updatedBy,
            Date createdDtm,
            Date updatedDtm,
            long revisionCount) {
        this.locationId = locationId;
        this.courthouse = courthouse;
        this.roomNumber = roomNumber;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.createdDtm = createdDtm;
        this.updatedDtm = updatedDtm;
        this.revisionCount = revisionCount;
    }

    public UUID getLocationId() {
        return this.locationId;
    }

    public void setLocationId(UUID locationId) {
        this.locationId = locationId;
    }

    public Courthouse getCourthouse() {
        return this.courthouse;
    }

    public void setCourthouse(Courthouse courthouse) {
        this.courthouse = courthouse;
    }

    public String getRoomNumber() {
        return this.roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }
}
