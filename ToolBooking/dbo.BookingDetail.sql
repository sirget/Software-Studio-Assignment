CREATE TABLE [dbo].[BookingDetail] (
    [id]         NVARCHAR (450) NOT NULL,
    [uid]        NVARCHAR (MAX) NOT NULL,
    [itemid]     INT            NOT NULL,
    [start_date] DATETIME2 (7)  NOT NULL,
    CONSTRAINT [PK_BookingDetail] PRIMARY KEY CLUSTERED ([id] ASC)
);

